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
    public class EmployeesController : ApiController
    {
        private EISEntities db = new EISEntities();

        // GET: api/Employees
        public IQueryable<Employee> GetEmployees()
        {
            return db.Employees;
        }

        //// GET: api/Employees/5
        //[ResponseType(typeof(Employee))]
        //public IHttpActionResult GetEmployee(string id)
        //{
        //    Employee employee = db.Employees.Find(id);
        //    if (employee == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(employee);
        //}

        // PUT: api/Employees/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployee(string id, Employee employee)
        {

            if (id != employee.employeeId)
            {
                return BadRequest();
            }

            db.Entry(employee).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
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

        // POST: api/Employees
        [ResponseType(typeof(Employee))]
        public IHttpActionResult PostEmployee(Employee employee)
        {

            db.Employees.Add(employee);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = employee.employeeId }, employee);
        }

        // DELETE: api/Employees/5
        [ResponseType(typeof(Employee))]
        public IHttpActionResult DeleteEmployee(string id)
        {
            Employee employee = db.Employees.Find(id);
            if (employee == null)
            {
                return NotFound();
            }

            db.Employees.Remove(employee);
            db.SaveChanges();

            return Ok(employee);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeExists(string id)
        {
            return db.Employees.Count(e => e.employeeId == id) > 0;
        }
    }
}