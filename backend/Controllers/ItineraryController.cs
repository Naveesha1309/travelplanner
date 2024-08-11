using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItineraryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ItineraryController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Itinerary>>> GetItineraries()
        {
            return await _context.Itineraries.ToListAsync();
        }

        // [HttpGet("{id}")]
        // public async Task<ActionResult<Itinerary>> GetItinerary(int id)
        // {
        //     var itinerary = await _context.Itineraries
        //         .Include(i => i.Reviews)
        //         .FirstOrDefaultAsync(i => i.ItineraryId == id);

        //     if (itinerary == null)
        //     {
        //         return NotFound();
        //     }

        //     return itinerary;
        // }

        [HttpGet("{id}")]
        public async Task<ActionResult<Itinerary>> GetItinerary(int id)
        {
            var itinerary = await _context.Itineraries.FindAsync(id);
            if (itinerary == null)
            {
                return NotFound();
            }
            return itinerary;
        }

        

        // [HttpPost]
        // public async Task<ActionResult<Itinerary>> CreateItinerary(Itinerary itinerary)
        // {
        //     _context.Itineraries.Add(itinerary);
        //     await _context.SaveChangesAsync();
        //     return CreatedAtAction(nameof(GetItinerary), new { id = itinerary.ItineraryId }, itinerary);
        // }

        // [HttpPut("{id}")]
        // public async Task<IActionResult> UpdateItinerary(int id, Itinerary itinerary)
        // {
        //     if (id != itinerary.ItineraryId)
        //     {
        //         return BadRequest();
        //     }

        //     _context.Entry(itinerary).State = EntityState.Modified;

        //     try
        //     {
        //         await _context.SaveChangesAsync();
        //     }
        //     catch (DbUpdateConcurrencyException)
        //     {
        //         if (!_context.Itineraries.Any(e => e.ItineraryId == id))
        //         {
        //             return NotFound();
        //         }
        //         else
        //         {
        //             throw;
        //         }
        //     }

        //     return NoContent();
        // }

        // [HttpDelete("{id}")]
        // public async Task<IActionResult> DeleteItinerary(int id)
        // {
        //     var itinerary = await _context.Itineraries.FindAsync(id);
        //     if (itinerary == null)
        //     {
        //         return NotFound();
        //     }

        //     _context.Itineraries.Remove(itinerary);
        //     await _context.SaveChangesAsync();

        //     return NoContent();
        // }
    }
}