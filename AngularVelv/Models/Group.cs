using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using VelvAPI.Models;

namespace VelvAPI.Models
{
    public class Group
    {
        public Group()
        {
            StudentGroups = new HashSet<StudentGroup>();
        }

        [Required]
        public long ID { get; set; }

        [StringLength(25, ErrorMessage = "Name cannot be longer than 25 characters.")]      
        public string Name { get; set; }

        public ICollection<StudentGroup> StudentGroups{ get; set; }

    }
}
