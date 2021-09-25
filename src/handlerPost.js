const DataProcessing = (request, h) => {
  // request payload to get data from client side.
  const {
    gejala1,
    gejala2,
    gejala3,
    gejala4,
    gejala5,
    gejala6,
    gejala7,
    gejala8,
    gejala9,
    gejala10,
    gejala11,
    gejala12,
    gejala13,
    gejala14,
    gejala15,
    gejala16,
    gejala17,
    gejala18,
    gejala19,
    gejala20,
    gejala21,
    gejala22,
    gejala23,
    gejala24,
    gejala25,
    gejala26,
    gejala27,
    gejala28,
    gejala29,
    gejala30,
    gejala31,
    gejala32,
    gejala33,
    gejala34,
    gejala35,
    gejala36,
    gejala37,
    gejala38,
    gejala39,
    gejala40,
    gejala41,
    gejala42,
    gejala43,
    gejala44,
  } = request.payload;
  // success
  // Expert System for Diagnostic Eye Diseases
  const diagnose = () => {
    if (gejala1 == 1) {
      if (gejala2 == 1) {
        if (gejala3 == 1) {
          if (gejala4 == 1) {
            if (gejala14 == 1) {
              if (gejala27 == 1) {
                if (gejala28 == 1) {
                  if (gejala34 == 1) {
                    return "Anda didiagnosa mengalami Ulkus Kornea.";
                  }
                  return "Anda mengelami beberapa gejala Ulkus Kornea.";
                }
                return "Anda mengelami beberapa gejala Ulkus Kornea.";
              }
              return "Anda mengelami beberapa gejala Ulkus Kornea.";
            }
            return "Anda mengelami beberapa gejala Ulkus Kornea.";
          }
          return "Anda mengelami beberapa gejala Ulkus Kornea.";
        }
        if (gejala12 == 1) {
          if (gejala14 == 1) {
            if (gejala28 == 1) {
              return "Anda didiagnosa mengalami Konjungtivitis.";
            }
            return "Anda mengelami beberapa gejala Konjungtivitis.";
          }
          return "Anda mengelami beberapa gejala Konjungtivitis.";
        }
        if (gejala14 == 1) {
          if (gejala18 == 1) {
            if (gejala27 == 1) {
              if (gejala28 == 1) {
                if (gejala29 == 1) {
                  return "Anda didiagnosa mengalami Keratitis Pungtata Superfisialis.";
                }
                return "Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis.";
              }
              return "Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis.";
            }
            return "Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis.";
          }
          return "Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis.";
        }
        if (gejala21 == 1) {
          if (gejala22 == 1) {
            return "Anda didiagnosa mengalami Katarak.";
          }
          return "Anda mengalami beberapa gejala Katarak.";
        }
        if (gejala23 == 1) {
          if (gejala34 == 1) {
            return "Anda didiagnosa mengalami Endoftalmitis.";
          }
          return "Anda mengalami beberapa gejala Endoftalmitis.";
        }
        return "Anda mengalami gejala peka terhadap cahaya (fotofobia) dan terasa nyeri. Belum dapat dipastikan diagnosa apa yang tepat.";
      }
      if (gejala5 == 1) {
        if (gejala9 == 1) {
          if (gejala10 == 1) {
            return "Anda didiagnosa mengalami Blefaritis.";
          }
          return "Anda mengalami beberapa gejala Blefaritis.";
        }
        return "Anda mengalami 2 gejala Blefaritis.";
      }
      if (gejala14 == 1) {
        if (gejala18 == 1) {
          if (gejala21 == 1) {
            return "Anda didiagnosa mengalami Keratokonus.";
          }
          return "Anda mengalami beberapa gejala Keratokonus.";
        }
        return "Anda mengalami 2 gejala Keratokonus.";
      }
      if (gejala18 == 1) {
        if (gejala23 == 1) {
          return "Anda didagnosa mengalami Uveitis.";
        }
        return "Anda mengalami 2 gejala Uveitis.";
      }
      return "Anda mengalami gejala peka terhadap cahaya (fotofobia). Belum bisa dipastikan apa diagnosa yang tepat.";
    }
    if (gejala2 == 1) {
      if (gejala5 == 1) {
        if (gejala14 == 1) {
          if (gejala27 == 1) {
            if (gejala35 == 1) {
              if (gejala43 == 1) {
                if (gejala44 == 1) {
                  return "Anda didiagnosa mengalami Glaukoma.";
                }
                return "Anda mengalami beberapa gejala Glaukoma.";
              }
              return "Anda mengalami beberapa gejala Glaukoma.";
            }
            return "Anda mengalami beberapa gejala Glaukoma.";
          }
          return "Anda mengalami beberapa gejala Glaukoma.";
        }
        if (gejala25 == 1) {
          if (gejala26 == 1) {
            return "Anda didiagnosa mengalami Selulitis Orbitalis.";
          }
          return "Anda mengalami beberapa gejala Selulitis Orbitalis.";
        }
        return "Anda mengalami 2 gejala yang bisa jadi Glaukoma atau Selulitis Orbitalis.";
      }
      return "Anda mengalami gejala mata terasa nyeri. Belum bisa dipastikan apa diagnosa yang tepat.";
    }
    if (gejala5 == 1) {
      if (gejala6 == 1) {
        if (gejala7 == 1) {
          if (gejala8 == 1) {
            return "Anda didiagnosa mengalami Kalazion.";
          }
          return "Anda mengalami beberapa gejala Kalazion.";
        }
        return "Anda mengalami 2 gejala Kalazion.";
      }
      if (gejala16 == 1) {
        if (gejala17 == 1) {
          return "Anda didiagnosa mengalami Trakoma.";
        }
        return "Anda mengalami 2 gejala Trakoma.";
      }
      return "Anda mengalami gejala kelopak mata membengkak. Belum bisa dipastikan apa diagnosa yang tepat.";
    }
    if (gejala12 == 1) {
      if (gejala28 == 1) {
        if (gejala30 == 1) {
          if (gejala31 == 1) {
            return "Anda didiagnosa mengalami Alergi Mata Merah.";
          }
          return "Anda mengalami beberapa gejala Alergi Mata Merah.";
        }
        return "Anda mengalami 2 gejala Alergi Mata Merah.";
      }
      return "Anda mengalami gejala mata terasa panas. Belum bisa dipastikan apa diagnosa yang tepat.";
    }
    if (gejala13 == 1) {
      if (gejala14 == 1) {
        if (gejala15 == 1) {
          if (gejala27 == 1) {
            return "Anda didiagnosa mengalami Hordeolum (Stye).";
          }
          return "Anda mengalami beberapa gejala Hordeolum (Stye).";
        }
        return "Anda mengalami 2 gejala Hordeolum (Stye).";
      }
      return "Anda mengalami gejala mata seperti kelilipan. Belum bisa dipastikan apa diagnosa yang tepat.";
    }
    if (gejala18 == 1) {
      if (gejala19 == 1) {
        if (gejala20 == 1) {
          return "Anda didiagnosa mengalami Alblasio Retina.";
        }
        return "Anda didiagnosa mengalami Retinopati Diabetikum.";
      }
      return "Anda mengalami gejala penglihatan kabur. Belum bisa dipastikan apa diagnosa yang tepat.";
    }
    if (gejala24 == 1) {
      return "Anda didiagnosa mengalami Eksoftalmus.";
    }
    if (gejala25 == 1) {
      if (gejala35 == 1) {
        if (gejala36 == 1) {
          if (gejala37 == 1) {
            return "Anda didiagnosa mengalami Trombosis Sinus Kavernosus.";
          }
          return "Anda mengalami beberapa gejala Trombosis Sinus Kavernosus.";
        }
        return "Anda mengalami 2 gejala Trombosis Sinus Kavernosus.";
      }
      return "Anda mengalami gejala Deman. Belum bisa dipastikan apa diagnosa yang tepat.";
    }
    if (gejala38 == 1) {
      if (gejala39 == 1) {
        return "Anda didiagnosa mengalami Optic Neuritis.";
      }
      return "Anda mengalami gejala Sakit dengan gerakan mata. Belum bisa dipastikan apa diagnosa yang tepat.";
    }
    if (gejala14 == 1) {
      if (gejala25 == 1) {
        if (gejala27 == 1) {
          if (gejala40 == 1) {
            if (gejala41 == 1) {
              return "Anda didiagnosa mengalami Dakriotitis.";
            }
            return "Anda mengalami beberapa gejala Dakriotitis.";
          }
          return "Anda mengalami beberapa gejala Dakriotitis.";
        }
        return "Anda mengalami 2 gejala Dakriotitis.";
      }
      return "Anda mengalami gejala mata berair. Belum bisa dipastikan apa diagnosa yang tepat.";
    }
    return "Maaf, data gejala yang anda input belum dapat dipastikan diagnosa apa yang tepat.";
  };

  // Output
  const gejala = [
    gejala1,
    gejala2,
    gejala3,
    gejala4,
    gejala5,
    gejala6,
    gejala7,
    gejala8,
    gejala9,
    gejala10,
    gejala11,
    gejala12,
    gejala13,
    gejala14,
    gejala15,
    gejala16,
    gejala17,
    gejala18,
    gejala19,
    gejala20,
    gejala21,
    gejala22,
    gejala23,
    gejala24,
    gejala25,
    gejala26,
    gejala27,
    gejala28,
    gejala29,
    gejala30,
    gejala31,
    gejala32,
    gejala33,
    gejala34,
    gejala35,
    gejala36,
    gejala37,
    gejala38,
    gejala39,
    gejala40,
    gejala41,
    gejala42,
    gejala43,
    gejala44,
  ];
  // Check if there is no null value
  gejalaDefined = gejala.map((i) => i !== 0);
  if (gejalaDefined !== null) {
    const response = h.response({
      status: "success",
      message: "Data gejala berhasil diproses.",
      dataGejala1: gejala1,
      dataGejala2: gejala2,
      diagnosis: diagnose(
        gejala1,
        gejala2,
        gejala3,
        gejala4,
        gejala5,
        gejala6,
        gejala7,
        gejala8,
        gejala9,
        gejala10,
        gejala11,
        gejala12,
        gejala13,
        gejala14,
        gejala15,
        gejala16,
        gejala17,
        gejala18,
        gejala19,
        gejala20,
        gejala21,
        gejala22,
        gejala23,
        gejala24,
        gejala25,
        gejala26,
        gejala27,
        gejala28,
        gejala29,
        gejala30,
        gejala31,
        gejala32,
        gejala33,
        gejala34,
        gejala35,
        gejala36,
        gejala37,
        gejala38,
        gejala39,
        gejala40,
        gejala41,
        gejala42,
        gejala43,
        gejala44
      ),
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "Data gejala gagal diproses",
  });
  response.code(404);
  return response;
};

module.exports = { DataProcessing };

// Output Testing Trough Node Js : node chatbot-algorithm.js
/*console.log(diagnose(
    gejala1=1,
    gejala2=0,
    gejala3=0,
    gejala4=0,
    gejala5=0,
    gejala6=0,
    gejala7=0,
    gejala8=0,
    gejala9=0,
    gejala10=0,
    gejala11=0,
    gejala12=0,
    gejala13=0,
    gejala14=0,
    gejala15=0,
    gejala16=0,
    gejala17=0,
    gejala18=0,
    gejala19=0,
    gejala20=0,
    gejala21=0,
    gejala22=0,
    gejala23=0,
    gejala24=0,
    gejala25=0,
    gejala26=0,
    gejala27=0,
    gejala28=0,
    gejala29=0,
    gejala30=0,
    gejala31=0,
    gejala32=0,
    gejala33=0,
    gejala34=0,
    gejala35=0,
    gejala36=0,
    gejala37=0,
    gejala38=0,
    gejala39=0,
    gejala40=0,
    gejala41=0,
    gejala42=0,
    gejala43=0,
    gejala44=0,
));*/
