using DoAn_PTUDTTHD.Models;
using DoAn_PTUDTTHD.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DoAn_PTUDTTHD.Controllers
{
    public class BienBanViPhamController : ApiController
    {
        BienBanViPhamRepository bienBanViPhamRepository = new BienBanViPhamRepository();
        // GET api/BienBanViPham
        public IEnumerable<BienBanViPham> Get()
        {
            return bienBanViPhamRepository.findAll();
        }

        // GET api/BienBanViPham?SoBangLai=21312377
        public IEnumerable<BienBanViPham> Get(string soBangLai)
        {
            return bienBanViPhamRepository.findByBangLai(soBangLai);
        }
        /// get by nguoiDungId 
        public IEnumerable<BienBanViPham> Get(int nguoiDung_id)
        {
            return bienBanViPhamRepository.findByNguoiDung(nguoiDung_id);
        }
        //Get by id BienBanViPham
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/BienBanViPham/GetById")]
        public BienBanViPham GetById(int id)
        {
            return bienBanViPhamRepository.findById(id);
        }
        public bool Put([FromBody] BienBanViPham bienBan)
        {
            return bienBanViPhamRepository.updateHDNopPhat_BienBanViPham(bienBan);
        }
        //Thêm biên bản vi phạm
        /*
         * {
              "TongTien":0,
              "TongDiemTru":0,
              "ThoiGianViPham":"15/1/2021",
              "BangLai_id":2
            }
         */
        public BienBanViPham Post(BienBanViPham bienBanViPham)
        {
            return bienBanViPhamRepository.addBienBanViPham(bienBanViPham);
        }
        //thêm lỗi cho biên bản
        public bool Post(int bienBanViPham_id, int loiViPham_id)
        {
            return bienBanViPhamRepository.addLoiToBienBanViPham(bienBanViPham_id, loiViPham_id);
        }
    }
}
