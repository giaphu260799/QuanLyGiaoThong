using DoAn_PTUDTTHD.Models;
using DoAn_PTUDTTHD.Repository;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndUnitTest.Test
{
    [TestFixture]
    class BienBanViPhamTest
    {
        private BienBanViPhamRepository bienBanViPhamRepository;
        [SetUp]
        public void SetUp()
        {
            bienBanViPhamRepository = new BienBanViPhamRepository();
        }
        [Test]
        public void addBienBanViPham()
        {
            BienBanViPham bienBanViPham = new BienBanViPham() { TongTien = 0, TongDiemTru = 0, ThoiGianViPham = new DateTime(2021, 1, 15), BangLai_id = 2 };
            Assert.AreNotEqual(null, bienBanViPhamRepository.addBienBanViPham(bienBanViPham));
        }

    }
}
