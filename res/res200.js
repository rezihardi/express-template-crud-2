'use strict';

exports.ok = function(values, res) {
  let data = {
      'status': "true",
      'message': "data ditampilkan",
      'data': values
  };
  res.json(data);
  res.end();
};

exports.gaha = function(values, res) {
  let data = {
      'status': "true",
      'message': "data ditampilkan",
      'data': values
  };
  res.json(data);
  res.end();
};