using DoAn_PTUDTTHD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DoAn_PTUDTTHD.Repository
{
    public class BienBanViPhamRepository
    {
        public List<BienBanViPham> findAll()
        {
            using (var db = new QLHTGTEntities())
            {
                return db.BienBanViPhams.ToList();
            }
        }
        public List<BienBanViPham> findByBangLai(string soBangLai)
        {
            using (var db = new QLHTGTEntities())
            {
                BangLai bangLai = db.BangLais.Where(b => b.SoBangLai == soBangLai).FirstOrDefault();
                List<BienBanViPham> bienBanViPhams = db.BienBanViPhams.Include("LoiViPhams").Where(b => b.BangLai_id == bangLai.ID).ToList();
                if (bienBanViPhams != null) return bienBanViPhams;
            }
            return null;

        }
        public List<BienBanViPham> findByNguoiDung(int nguoiDung_id)
        {
            using (var db = new QLHTGTEntities())
            {
                List<BangLai> bangLais = db.BangLais.Where(b => b.NguoiDung_id == nguoiDung_id).ToList();
                List<BienBanViPham> bienBanViPhams = new List<BienBanViPham>();
                foreach (BangLai bangLai in bangLais)
                {
                    List<BienBanViPham> bienBanViPhamsOfBangLai = db.BienBanViPhams.Where(b => b.BangLai_id == bangLai.ID).ToList();
                    foreach (BienBanViPham bienBanViPham in bienBanViPhamsOfBangLai)
                    {
                        if (bienBanViPham != null)
                            bienBanViPhams.Add(bienBanViPham);
                    }
                }
                if (bienBanViPhams != null)
                    return bienBanViPhams;
                return null;
            }
        }
        public BienBanViPham findById(int id)
        {
            using (var db = new QLHTGTEntities())
            {
                BienBanViPham bienBanViPham = db.BienBanViPhams.Include("HoaDon").Include("LoiViPhams").Where(b => b.ID == id).FirstOrDefault();
                if (bienBanViPham != null) return bienBanViPham;
            }
            return null;
        }
        public bool updateHDNopPhat_BienBanViPham(BienBanViPham bienBan)
        {
            using (var db = new QLHTGTEntities())
            {
                try
                {
                    BienBanViPham bienBanUpdate = db.BienBanViPhams.Find(bienBan.ID);
                    if (bienBan == null)
                        return false;
                    bienBanUpdate.HDNopPhat = bienBan.HDNopPhat;
                    if (db.SaveChanges() > 0)
                        return true;
                    else return false;
                }
                catch
                {
                    return false;
                }
            }

        }
public BienBanViPham addBienBanViPham(BienBanViPham bienBanViPham)
        {
            using (var db = new QLHTGTEntities())
            {
                db.BienBanViPhams.Add(bienBanViPham);
                if (db.SaveChanges() > 0)
                    return bienBanViPham;
            }
            return null;
        }
        public bool addLoiToBienBanViPham(int bienBanViPham_id, int loiViPham_id)
        {
            using (var db = new QLHTGTEntities())
            {
                LoiViPham loiViPham = db.LoiViPhams.Find(loiViPham_id);
                if (loiViPham == null)
                    return false;
                BienBanViPham bienBanViPham = db.BienBanViPhams.Find(bienBanViPham_id);
                if (bienBanViPham == null)
                    return false;
                bienBanViPham.LoiViPhams.Add(loiViPham);
                bienBanViPham.TongDiemTru= bienBanViPham.TongDiemTru+ loiViPham.DiemTru;
                bienBanViPham.TongTien = bienBanViPham.TongTien+ loiViPham.MucPhat;
                if(db.SaveChanges()>0)
                {
                    return true;
                }
            }
            return false;
        }
    }
}