namespace backend.Models
{
    public class Itinerary
    {
        public int ItineraryId { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }

    }
}