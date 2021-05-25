using DoAn_PTUDTTHD.Repository;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndUnitTest.Test
{
    class CanBoTest
    {
        private CanBoRepository canBoRepository;

        [SetUp]
        public void SetUp()
        {
            canBoRepository = new CanBoRepository();
        }
        [Test]
        public void auth()
        {
            //Kiểm tra với username và password hợp lệ
            Assert.AreEqual(1, canBoRepository.auth("canbo1", "123").ID);
            //Kiểm tra với username không hợp lệ
            Assert.AreEqual(null, canBoRepository.auth("canbo100", "123"));
            //Kiểm tra với password không hợp lệ
            Assert.AreEqual(null, canBoRepository.auth("canbo1", "123456"));
            //Kiểm tra với username và password đều không hợp lệ
            Assert.AreEqual(null, canBoRepository.auth("canbo100", "123456"));

        }
        [Test]
        public void doiMatKhau()
        {
            //Kiểm tra cới username và passwordOld hợp lệ
            Assert.AreEqual(true, canBoRepository.doiMatKhau("canbo2", "123", "321"));
            //Kiểm tra với username không hợp lệ
            Assert.AreEqual(false, canBoRepository.doiMatKhau("canbo100", "123", "321"));
            //Kiểm tra với username không hợp lệ
            Assert.AreEqual(false, canBoRepository.doiMatKhau("canbo1", "123456", "321"));
            //Kiểm tra mật khẩu cũ giống mật khẩu mới
            Assert.AreEqual(false, canBoRepository.doiMatKhau("canbo1", "123", "123"));
            //Kiểm tra với username và mật khẩu cũ không hợp lệ
            Assert.AreEqual(false, canBoRepository.doiMatKhau("canbo100", "123456", "321"));
        }
    }
}
