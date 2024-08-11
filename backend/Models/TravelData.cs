using System.ComponentModel.DataAnnotations;
namespace backend.Models

{
    public class TravelData
    {
        [Key]
        public int DataId { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public decimal Price { get; set; }
    }
}