const diagnose = require('../chatbot-algorithm/chatbot-algorithm');
const DataProcessing = (request, h) => {
  // request payload to get data from client side. 
  const {
    gejala1, gejala2, gejala3, gejala4, gejala5,
    gejala6, gejala7, gejala8, gejala9, gejala10,
    gejala11, gejala12, gejala13, gejala14, gejala15,
    gejala16, gejala17, gejala18, gejala19, gejala20,
    gejala21, gejala22, gejala23, gejala24, gejala25,
    gejala26, gejala27, gejala28, gejala29, gejala30,
    gejala31, gejala32, gejala33, gejala34, gejala35,
    gejala36, gejala37, gejala38, gejala39, gejala40,
    gejala41, gejala42, gejala43, gejala44,
  } = request.payload;
  const newDataDiagnose = {
    gejala1, gejala2, gejala3, gejala4, gejala5,
    gejala6, gejala7, gejala8, gejala9, gejala10,
    gejala11, gejala12, gejala13, gejala14, gejala15,
    gejala16, gejala17, gejala18, gejala19, gejala20,
    gejala21, gejala22, gejala23, gejala24, gejala25,
    gejala26, gejala27, gejala28, gejala29, gejala30,
    gejala31, gejala32, gejala33, gejala34, gejala35,
    gejala36, gejala37, gejala38, gejala39, gejala40,
    gejala41, gejala42, gejala43, gejala44,
  };
  // Output
  const result = diagnose(newDataDiagnose);
  if (result !== null) {
    const response = h.response({
      status: 'success',
      message: 'Data gejala berhasil diproses.',
      result: result,
    });
    response.code(200);
    return response;
  };
  const response = h.response({
    status: 'fail',
    message: 'Data gejala gagal diproses',
    result: result,
  });
  response.code(404);
  return response;
};
module.exports = {DataProcessing};
