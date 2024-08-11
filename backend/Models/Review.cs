using System.ComponentModel.DataAnnotations;
using backend.Models;

public class Review
{
    public int ReviewId { get; set; }
    
  
    public int UserId { get; set; }

    public int ItineraryId { get; set; }
    

    [Range(1, 5)]
    public int Rating { get; set; }
    

    public string Comment { get; set; }


}