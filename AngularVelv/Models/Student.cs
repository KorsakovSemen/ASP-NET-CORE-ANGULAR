using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using VelvAPI.Models;

namespace VelvAPI.Models
{
    public class Student : Person
    {
        public Student()
        {
            this.StudentGroups = new HashSet<StudentGroup>();
        }

        [StringLength(16, MinimumLength = 6, ErrorMessage = "Nickname cannot be longer than 40 characters and cannot be smaller than 6.")]
        public string NickName { get; set; }

        public override string FullName 
        {
            get
            {
                return LastName + " " + MiddleName + " " + FirstName + "'" + NickName + "'";
            }
        }

        public ICollection<StudentGroup> StudentGroups { get; set; }

    }
}
