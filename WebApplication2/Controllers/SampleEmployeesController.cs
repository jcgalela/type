using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class SampleEmployeesController : ApiController
    {
        private SampleEntities db = new SampleEntities();

        // GET: api/SampleEmployees
        public IQueryable<SampleEmployee> GetSampleEmployees()
        {
            return db.SampleEmployees;
        }

        // GET: api/SampleEmployees/5
        //[ResponseType(typeof(SampleEmployee))]
        //public IHttpActionResult GetSampleEmployee(int id)
        //{
        //    SampleEmployee sampleEmployee = db.SampleEmployees.Find(id);
        //    if (sampleEmployee == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(sampleEmployee);
        //}

        // PUT: api/SampleEmployees/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSampleEmployee(int id, SampleEmployee sampleEmployee)
        {
            if (id != sampleEmployee.employeeId)
            {
                return BadRequest();
            }

            db.Entry(sampleEmployee).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SampleEmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/SampleEmployees
        [ResponseType(typeof(SampleEmployee))]
        public IHttpActionResult PostSampleEmployee(SampleEmployee sampleEmployee)
        {
            db.SampleEmployees.Add(sampleEmployee);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = sampleEmployee.employeeId }, sampleEmployee);
        }

        // DELETE: api/SampleEmployees/5
        [ResponseType(typeof(SampleEmployee))]
        public IHttpActionResult DeleteSampleEmployee(int id)
        {
            SampleEmployee sampleEmployee = db.SampleEmployees.Find(id);
            if (sampleEmployee == null)
            {
                return NotFound();
            }

            db.SampleEmployees.Remove(sampleEmployee);
            db.SaveChanges();

            return Ok(sampleEmployee);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SampleEmployeeExists(int id)
        {
            return db.SampleEmployees.Count(e => e.employeeId == id) > 0;
        }
    }
}