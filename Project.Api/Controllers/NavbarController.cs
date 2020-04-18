using Microsoft.AspNetCore.Mvc;
using Project.Api.Data;

namespace Project.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NavbarController : ControllerBase
    {
        private readonly INavbarRepository _navbarRepository;

        public NavbarController(INavbarRepository navbarRepository)
        {
            _navbarRepository = navbarRepository;
        }

        [HttpGet]
        public IActionResult GetMenu()
        {
            var list = _navbarRepository.GelNavbarMenu();

            return Ok(list);

        }
    }
}