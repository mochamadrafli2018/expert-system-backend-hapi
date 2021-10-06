const Test = (request, h) => {
  const {selected} = request.payload;
  gejala1 = selected.find((i) => i == 'gejala1');
  if (gejala1) {
    const response = h.response({
      status: 'success',
      message: 'Data was accepted',
      data: {gejala1},
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Data was not accepted',
  });
  response.code(404);
  return response;
};

module.exports = {Test};
