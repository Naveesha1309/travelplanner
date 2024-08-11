using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<TravelData> TravelData { get; set; }
        public DbSet<Itinerary> Itineraries { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Review> Reviews { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

    // The OnModelCreating method is overridden to configure the mapping between the model classes and the database schema
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Users entity
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UserId);
                entity.Property(e => e.Username).IsRequired().HasMaxLength(50);
                entity.Property(e => e.Password).IsRequired().HasMaxLength(64);
                entity.Property(e => e.Email).IsRequired().HasMaxLength(100);
                entity.HasIndex(e => e.Email).IsUnique();
            });

          
            modelBuilder.Entity<TravelData>(entity =>
            {
                entity.HasKey(e => e.DataId);
                entity.Property(e => e.Type).IsRequired().HasMaxLength(20);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Description).HasColumnType("TEXT");
                entity.Property(e => e.Location).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Price).IsRequired().HasColumnType("DECIMAL(10, 2)");
            });

            // Itineraries entity
            modelBuilder.Entity<Itinerary>(entity =>
            {
                entity.HasKey(e => e.ItineraryId);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
                entity.Property(e => e.StartDate).IsRequired().HasColumnType("DATE");
                entity.Property(e => e.EndDate).IsRequired().HasColumnType("DATE");
                entity.Property(e => e.Description).HasColumnType("TEXT");

            
                
            });

            // Bookings entity
            modelBuilder.Entity<Booking>(entity =>
            {
                entity.HasKey(e => e.BookingId);
                entity.Property(e => e.Status).IsRequired().HasMaxLength(20);
                entity.Property(e => e.BookingDate).IsRequired().HasColumnType("DATE");
                
              
                entity.HasOne<User>()
                    .WithMany() 
                    .HasForeignKey(e => e.UserId);

                entity.HasOne<Itinerary>()
                    .WithMany() 
                    .HasForeignKey(e => e.ItineraryId);
                
            });

            // Reviews entity
            modelBuilder.Entity<Review>(entity =>
            {
                entity.HasKey(e => e.ReviewId);
                entity.Property(e => e.Rating).IsRequired();
                entity.Property(e => e.Comment).HasColumnType("TEXT");
                
              
                entity.HasOne<User>()
                    .WithMany() 
                    .HasForeignKey(e => e.UserId);
                
              entity.HasOne<Itinerary>()
                    .WithMany() 
                    .HasForeignKey(e => e.ItineraryId);
            });
        }

    }
}
