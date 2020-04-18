using System.Collections.Generic;
using Project.Api.Entities;

namespace Project.Api.Data
{
    public interface INavbarRepository
    {
         List<NavMenu> GelNavbarMenu();
    }
}