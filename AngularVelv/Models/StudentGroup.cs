namespace VelvAPI.Models
{
    public class StudentGroup
    {
        public long StudentId { get; set; }
        public Student Student { get; set; }

        public long GroupId { get; set; }
        public Group Group { get; set; }
    }
}
