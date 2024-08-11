using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;

using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ReviewController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Review>> PostReview(Review review)
        {
            Console.WriteLine($"Received review: Rating={review.Rating}, Comment={review.Comment}, UserId={review.UserId}, ItineraryId={review.ItineraryId}");
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _context.Reviews.Add(review);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetReview", new { id = review.ReviewId }, review);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error saving review: {ex.Message}");
                return StatusCode(500, "An error occurred while saving the review.");
            }
}

    
        [HttpGet("itinerary/{itineraryId:int}")]
        public async Task<ActionResult<IEnumerable<Review>>> GetReviewsForItinerary(int itineraryId)
        {
            var reviews = await _context.Reviews.Where(r => r.ItineraryId == itineraryId).ToListAsync();

            if (reviews == null || !reviews.Any())
            {
                return NotFound();
            }

            return Ok(reviews);
        }

        
        [HttpGet("{reviewId}")]
        public async Task<ActionResult<IEnumerable<Review>>> GetReview(int reviewId)
        {
            var reviews = await _context.Reviews.Where(r => r.ReviewId == reviewId).ToListAsync();

            if (reviews == null || !reviews.Any())
            {
                return NotFound();
            }

            return Ok(reviews);
        }


            

   
        [HttpPut("{reviewId}")]
        public async Task<IActionResult> UpdateReview(int reviewId, Review review)
        {
            if (reviewId != review.ReviewId)
            {
                return BadRequest();
            }

            _context.Entry(review).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReviewExists(reviewId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

      
        [HttpDelete("{reviewId}")]
        public async Task<IActionResult> DeleteReview(int reviewId)
        {
            var review = await _context.Reviews.FindAsync(reviewId);
            if (review == null)
            {
                return NotFound();
            }

            _context.Reviews.Remove(review);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool ReviewExists(int id)
        {
            return _context.Reviews.Any(e => e.ReviewId == id);
        }
    }
}