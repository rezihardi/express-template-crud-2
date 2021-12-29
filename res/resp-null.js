'use strict';

exports.ok = function(res) {
  let data = {
      'status': "true",
      'message': "berhasil menambahkan/merubah data"
  };
  res.json(data);
  res.end();
};