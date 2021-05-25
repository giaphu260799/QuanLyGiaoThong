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
    class BangLaiTest
    {
        private BangLaiRepository bangLaiRepository;

        [SetUp]
        public void SetUp()
        {
            bangLaiRepository = new BangLaiRepository();
        }
        [Test]
        public void findById()
        {
            //kiểm tra với Id hợp lệ
            BangLai bangLai = bangLaiRepository.findById(2);
            Assert.AreEqual("A3", bangLai.Hang);
            Assert.AreEqual("TP HCM", bangLai.NoiCap);
            Assert.AreEqual("21312377", bangLai.SoBangLai);
            Assert.AreEqual(2, bangLai.NguoiDung_id);

            //Kiểm tra với ID không tồn tại
            Assert.AreEqual(null, bangLaiRepository.findById(100));

        }
        [Test]
        public void addBangLai()
        {
            //Kiểm tra với Id người dùng hợp lệ
            BangLai bangLai = new BangLai() { Hang = "B1", NgayCap = new DateTime(2021, 2, 17), NoiCap = "Gia Lai", NguoiDung_id = 2 };
            Assert.AreEqual(true, bangLaiRepository.addBangLai(bangLai));

            //kiểm tra với Id người dùng không hợp lệ
            bangLai.NguoiDung_id = 100;
            Assert.AreEqual(false, bangLaiRepository.addBangLai(bangLai));
        }
        [Test]
        private void updateBangLai()
        {
            //kiểm tra với 1 id bằng lái hợp lệ
            BangLai bangLai = new BangLai() { ID = 5, Hang = "E", NgayCap = new DateTime(2021, 2, 17), NoiCap = "Gia Lai", NguoiDung_id = 2 };
            Assert.AreEqual(true, bangLaiRepository.updateBangLai(bangLai));
            //Kiểm tra với 1 bằng lái không hợp lệ
            bangLai.ID = 100;
            Assert.AreEqual(false, bangLaiRepository.updateBangLai(bangLai));
        }
        [Test]
        public void deleteBangLai()
        {
            //kiểm tra với 1 id bằng lái hợp lệ
            Assert.AreEqual(true, bangLaiRepository.deleteBangLai(5));
            //Kiểm tra với 1 bằng lái không hợp lệ
            Assert.AreEqual(false, bangLaiRepository.deleteBangLai(100));
        }
    }
}
