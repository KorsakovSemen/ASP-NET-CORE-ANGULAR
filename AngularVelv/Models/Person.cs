using AngularVelv.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VelvAPI.Models
{
    public enum Gender
    {
        M,
        F
    }

    public abstract class Person 
    {
        [Required]
        public long ID { get; set; }

        [Column("Gender")]
        public string GenderString
        {
            get { return Gender.ToString(); }
            private set { Gender = value.ParseEnum<Gender>(); }
        }

        [NotMapped]
        public Gender Gender { get; set; }

        [Required]
        [StringLength(60, ErrorMessage = "Middle name cannot be longer than 60 characters.")]
        [Display(Name = "Middle Name")]
        public string MiddleName { get; set; }

        [Required]
        [StringLength(40, ErrorMessage = "First name cannot be longer than 40 characters.")]
        [Column("FirstName")]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(40, ErrorMessage = "Last name cannot be longer than 40 characters.")]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

    }
}
