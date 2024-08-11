namespace backend.Models
{
    public class Booking
    {
        public int BookingId { get; set; }

        public int UserId {get;set;}
        public int ItineraryId { get; set; }
        public string Status { get; set; }
        public DateTime BookingDate { get; set; }
    }
}