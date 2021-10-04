const diagnose = require('./diagnose');
const DataProcessing = (request, h) => {
  // get data from client side
  const {selected} = request.payload;
  // Expert System for Diagnostic Eye Diseases
  diagnose;
  // Check
  gejala1 = selected.find((i) => i == 'gejala1');
  gejala2 = selected.find((i) => i == 'gejala2');
  gejala3 = selected.find((i) => i == 'gejala3');
  gejala4 = selected.find((i) => i == 'gejala4');
  gejala5 = selected.find((i) => i == 'gejala5');
  gejala6 = selected.find((i) => i == 'gejala6');
  gejala7 = selected.find((i) => i == 'gejala7');
  gejala8 = selected.find((i) => i == 'gejala8');
  gejala9 = selected.find((i) => i == 'gejala9');
  gejala10 = selected.find((i) => i == 'gejala10');
  gejala11 = selected.find((i) => i == 'gejala11');
  gejala12 = selected.find((i) => i == 'gejala12');
  gejala13 = selected.find((i) => i == 'gejala13');
  gejala14 = selected.find((i) => i == 'gejala14');
  gejala15 = selected.find((i) => i == 'gejala15');
  gejala16 = selected.find((i) => i == 'gejala16');
  gejala17 = selected.find((i) => i == 'gejala17');
  gejala18 = selected.find((i) => i == 'gejala18');
  gejala19 = selected.find((i) => i == 'gejala19');
  gejala20 = selected.find((i) => i == 'gejala20');
  gejala21 = selected.find((i) => i == 'gejala21');
  gejala22 = selected.find((i) => i == 'gejala22');
  gejala23 = selected.find((i) => i == 'gejala23');
  gejala24 = selected.find((i) => i == 'gejala24');
  gejala25 = selected.find((i) => i == 'gejala25');
  gejala26 = selected.find((i) => i == 'gejala26');
  gejala27 = selected.find((i) => i == 'gejala27');
  gejala28 = selected.find((i) => i == 'gejala28');
  gejala29 = selected.find((i) => i == 'gejala29');
  gejala30 = selected.find((i) => i == 'gejala30');
  gejala31 = selected.find((i) => i == 'gejala31');
  gejala32 = selected.find((i) => i == 'gejala32');
  gejala33 = selected.find((i) => i == 'gejala33');
  gejala34 = selected.find((i) => i == 'gejala34');
  gejala35 = selected.find((i) => i == 'gejala35');
  gejala36 = selected.find((i) => i == 'gejala36');
  gejala37 = selected.find((i) => i == 'gejala37');
  gejala38 = selected.find((i) => i == 'gejala38');
  gejala39 = selected.find((i) => i == 'gejala39');
  gejala40 = selected.find((i) => i == 'gejala40');
  gejala41 = selected.find((i) => i == 'gejala41');
  gejala42 = selected.find((i) => i == 'gejala42');
  gejala43 = selected.find((i) => i == 'gejala43');
  gejala44 = selected.find((i) => i == 'gejala44');
  gejala = [
    gejala1, gejala2, gejala3, gejala4, gejala5,
    gejala6, gejala7, gejala8, gejala9, gejala10,
    gejala11, gejala12, gejala13, gejala14, gejala15,
    gejala16, gejala17, gejala18, gejala19, gejala20,
    gejala21, gejala22, gejala23, gejala24, gejala25,
    gejala26, gejala27, gejala28, gejala29, gejala30,
    gejala31, gejala32, gejala33, gejala34, gejala35,
    gejala36, gejala37, gejala38, gejala39, gejala40,
    gejala40, gejala41, gejala41, gejala43, gejala44,
  ];
  if (gejala !== null) {
    const response = h.response({
      status: 'success',
      message: 'Data gejala berhasil diproses.',
      datagejala1: gejala1,
      datagejala2: gejala2,
      datagejala3: gejala3,
      datagejala4: gejala4,
      datagejala5: gejala5,
      diagnosis: diagnose(selected),
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Data gejala gagal diproses',
  });
  response.code(400);
  return response;
};

module.exports = {DataProcessing};
