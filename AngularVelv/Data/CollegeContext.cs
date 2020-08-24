using Microsoft.EntityFrameworkCore;
using VelvAPI.Models;

namespace VelvAPI.Data
{
    public class CollegeContext : DbContext
    {
        public CollegeContext(DbContextOptions<CollegeContext> options) 
            : base(options)
        {
        }

        public DbSet<Group> Groups { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<StudentGroup> StudentGroups { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudentGroup>()
                .HasKey(t => new { t.StudentId, t.GroupId });

            modelBuilder.Entity<StudentGroup>()
                .HasOne(sc => sc.Student)
                .WithMany(s => s.StudentGroups)
                .HasForeignKey(sc => sc.StudentId);

            modelBuilder.Entity<StudentGroup>()
                .HasOne(sc => sc.Group)
                .WithMany(c => c.StudentGroups)
                .HasForeignKey(sc => sc.GroupId);


            base.OnModelCreating(modelBuilder);

        }



    }
}
