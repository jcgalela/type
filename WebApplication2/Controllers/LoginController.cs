using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI.WebControls;
using WebApplication2.Models;
using Login = WebApplication2.Models.Login;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : ApiController
    {
        //For user login

        [Route("api/userLogin")]

        [HttpPost]
        public Response Login(Login Lg)
        {
            EISEntities db = new EISEntities();
            var cre = db.Employees.Where(x => x.userName == Lg.UserName && x.password == Lg.Password).ToList().FirstOrDefault();

            if (cre != null)
            {
                return new Response { Status = "Success", Message = "Welcome!" };
            }
            else
            {
                return new Response { Status = "Invalid", Message = "Invalid Username/Password" };
            }
        }
    }

}

