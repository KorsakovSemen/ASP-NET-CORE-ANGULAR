using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace VelvAPI.Models
{
    public class Student : Person
    {
        public Student()
        {
            this.StudentGroups = new HashSet<StudentGroup>();
        }

        [StringLength(16, MinimumLength = 6, ErrorMessage = "Nickname cannot be longer than 40 characters and cannot be smaller than 6.")]
        [Index(IsUnique = true)]
        public string NickName { get; set; }

        public ICollection<StudentGroup> StudentGroups { get; set; }

    }
}
