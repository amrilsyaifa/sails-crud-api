/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "POST /mahasiswa": "MahasiswaController.create",
  "GET /mahasiswa": "MahasiswaController.find",
  "GET /mahasiswa/:id": "MahasiswaController.findOne",
  "PATCH /mahasiswa/:id": "MahasiswaController.update",
  "DELETE /mahasiswa/:id": "MahasiswaController.delete"
};
