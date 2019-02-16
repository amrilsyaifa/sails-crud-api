/**
 * MahasiswaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create(req, res) {
    try {
      let params = req.allParams();
      if (!params.nama) {
        return res.badRequest({ err: "Nama Wajib di Isi" });
      }

      const result = await Mahasiswa.create({
        nama: params.nama,
        universitas: params.universitas,
        alamat: params.alamat
      });
      return res.ok(result);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async find(req, res) {
    try {
      const mahasiswas = await Mahasiswa.find();
      return res.ok(mahasiswas);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async findOne(req, res) {
    try {
      const mahasiswa = await Mahasiswa.findOne({
        id: req.params.id
      });
      return res.ok(mahasiswa);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async update(req, res) {
    try {
      let params = req.allParams();
      let attributes = {};
      if (params.nama) {
        attributes.nama = params.nama;
      }
      if (params.universitas) {
        attributes.universitas = params.universitas;
      }
      if (params.alamat) {
        attributes.alamat = params.alamat;
      }

      const result = await Mahasiswa.update({ id: req.params.id }, attributes, {
        updateAt: Date.now()
      });
      return res.ok(result);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async delete(req, res) {
    try {
      const result = await Mahasiswa.destroy({
        id: req.params.id
      });
      return res.ok(result);
    } catch (err) {
      return res.serverError(err);
    }
  }
};
