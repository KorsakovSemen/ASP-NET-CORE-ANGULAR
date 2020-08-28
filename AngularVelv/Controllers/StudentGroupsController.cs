using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VelvAPI.Data;
using VelvAPI.Models;

namespace AngularVelv.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentGroupsController : ControllerBase
    {
        private readonly CollegeContext _context;

        public StudentGroupsController(CollegeContext context)
        {
            _context = context;
        }

        // GET: api/StudentGroups
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentGroup>>> GetStudentGroups()
        {
            var studentGroups = _context.StudentGroups
                .Include(gr => gr.Group)
                .Include(st => st.Student)
                .AsNoTracking();

            return await studentGroups.ToListAsync();

        }

        // GET: api/StudentGroups/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentGroup>> GetStudentGroup(long id)
        {
            var studentGroup = await _context.StudentGroups.FindAsync(id);

            if (studentGroup == null)
            {
                return NotFound();
            }

            return studentGroup;
        }

        // PUT: api/StudentGroups/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentGroup(long id, StudentGroup studentGroup)
        {
            if (id != studentGroup.StudentId)
            {
                return BadRequest();
            }

            _context.Entry(studentGroup).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentGroupExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StudentGroups
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<StudentGroup>> PostStudentGroup(StudentGroup studentGroup)
        {
            _context.StudentGroups.Add(studentGroup);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (StudentGroupExists(studentGroup.StudentId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStudentGroup", new { id = studentGroup.StudentId }, studentGroup);
        }

        // DELETE: api/StudentGroups/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<StudentGroup>> DeleteStudentGroup(long studentId, long groupId)
        {
            var studentGroup = await _context.StudentGroups.FindAsync(id);
            if (studentGroup == null)
            {
                return NotFound();
            }

            _context.StudentGroups.Remove(studentGroup);
            await _context.SaveChangesAsync();

            return studentGroup;
        }

        private bool StudentGroupExists(long id)
        {
            return _context.StudentGroups.Any(e => e.StudentId == id);
        }
    }
}
