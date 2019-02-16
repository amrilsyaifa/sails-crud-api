/**
 * Mahasiswa.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nama: {
      type: "string",
      required: true
    },
    universitas: {
      type: "string"
    },
    alamat: {
      type: "string"
    }
  }
};
