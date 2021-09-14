let [
  G1, G2, G3, G4, G5, G6, G7, G8, G9, G10,
  G11, G12, G13, G14, G15, G16, G17, G18, G19, G20,
  G21, G22, G23, G24, G25, G26, G27, G28, G29, G30,
  G31, G32, G33, G34, G35, G36, G37, G38, G39, G40,
  G41, G42, G43, G44, G45
] = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
];

// Expert System for Diagnostic Eye Diseases
const diagnose = () => {
  if (G1 == 1) {
    if (G2 == 1) {
      if (G3 == 1) {
        if (G4 == 1) {
          if (G14 == 1) {
            if (G27 == 1) {
              if (G28 == 1) {
                if (G34 == 1) {
                  return 'Anda didiagnosa mengalami Ulkus Kornea.';
                }
                return 'Anda mengelami beberapa gejala Ulkus Kornea.';
              }
              return 'Anda mengelami beberapa gejala Ulkus Kornea.';
            }
            return 'Anda mengelami beberapa gejala Ulkus Kornea.';
          }
          return 'Anda mengelami beberapa gejala Ulkus Kornea.';
        }
        return 'Anda mengelami beberapa gejala Ulkus Kornea.';
      }
      if (G12 == 1) {
        if (G14 == 1) {
          if (G28 == 1) {
            return 'Anda didiagnosa mengalami Konjungtivitis.';
          }
          return 'Anda mengelami beberapa gejala Konjungtivitis.';
        }
        return 'Anda mengelami beberapa gejala Konjungtivitis.';
      }
      if (G14 == 1) {
        if (G18 == 1) {
          if (G27 == 1) {
            if (G28 == 1) {
              if (G29 == 1) {
                return 'Anda didiagnosa mengalami Keratitis Pungtata Superfisialis.';
              }
              return 'Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis.';
            }
            return 'Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis.';
          }
          return 'Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis.';
        }
        return 'Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis.';
      }
      if (G21 == 1) {
        if (G22 == 1) {
          return 'Anda didiagnosa mengalami Katarak.';
        }
        return 'Anda mengalami beberapa gejala Katarak.';
      }
      if (G23 == 1) {
        if (G34 == 1) {
          return 'Anda didiagnosa mengalami Endoftalmitis.';
        }
        return 'Anda mengalami beberapa gejala Endoftalmitis.';
      }
      return 'Anda mengalami gejala peka terhadap cahaya (fotofobia) dan terasa nyeri. Belum dapat dipastikan diagnosa apa yang tepat.';
    }
    if (G5 == 1) {
      if (G9 == 1) {
        if (G10 == 1) {
          return 'Anda didiagnosa mengalami Blefaritis.';
        }
        return 'Anda mengalami beberapa gejala Blefaritis.';
      }
      return 'Anda mengalami 2 gejala Blefaritis.';
    }
    if (G14 == 1) {
      if (G18 == 1) {
        if (G21 == 1) {
          return 'Anda didiagnosa mengalami Keratokonus.';
        }
        return 'Anda mengalami beberapa gejala Keratokonus.';
      }
      return 'Anda mengalami 2 gejala Keratokonus.';
    }
    if (G18 == 1) {
      if (G23 == 1) {
        return 'Anda didagnosa mengalami Uveitis.';
      }
      return 'Anda mengalami 2 gejala Uveitis.';
    }
    return 'Anda mengalami gejala fotofobia. Belum bisa dipastikan apa diagnosa yang tepat.';
  }
  if (G2 == 1) {
    if (G5 == 1) {
      if (G14 == 1) {
        if (G27 == 1) {
          if (G35 == 1) {
            if (G43 == 1) {
              if (G44 == 1) {
                return 'Anda didiagnosa mengalami Glaukoma.';
              }
              return 'Anda mengalami beberapa gejala Glaukoma.';
            }
            return 'Anda mengalami beberapa gejala Glaukoma.';
          }
          return 'Anda mengalami beberapa gejala Glaukoma.';
        }
        return 'Anda mengalami beberapa gejala Glaukoma.';
      }
      if (G25 == 1) {
        if (G26 == 1) {
          return 'Anda didiagnosa mengalami Selulitis Orbitalis.';
        }
        return 'Anda mengalami beberapa gejala Selulitis Orbitalis.';
      }
      return 'Anda mengalami 2 gejala yang bisa jadi Glaukoma atau Selulitis Orbitalis.';
    }
    return 'Anda mengalami gejala mata terasa nyeri. Belum bisa dipastikan apa diagnosa yang tepat.';
  }
  if (G5 == 1) {
    if (G6 == 1) {
      if (G7 == 1) {
        if (G8 == 1) {
          return 'Anda didiagnosa mengalami Kalazion.';
        }
        return 'Anda mengalami beberapa gejala Kalazion.';
      }
      return 'Anda mengalami 2 gejala Kalazion.';
    }
    if (G16 == 1) {
      if (G17 == 1) {
        return 'Anda didiagnosa mengalami Trakoma.';
      }
      return 'Anda mengalami 2 gejala Trakoma.';
    }
    return 'Anda mengalami gejala kelopak mata membengkak. Belum bisa dipastikan apa diagnosa yang tepat.';
  }
  if (G12 == 1) {
    if (G28 == 1) {
      if (G30 == 1) {
        if (G31 == 1) {
          return 'Anda didiagnosa mengalami Alergi Mata Merah.';
        }
        return 'Anda mengalami beberapa gejala Alergi Mata Merah.';
      }
      return 'Anda mengalami 2 gejala Alergi Mata Merah.';
    }
    return 'Anda mengalami gejala mata terasa panas. Belum bisa dipastikan apa diagnosa yang1tepat.';
  }
  if (G13 == 1) {
    if (G14 == 1) {
      if (G15 == 1) {
        if (G27 == 1) {
          return 'Anda didiagnosa mengalami Hordeolum (Stye).';
        }
        return 'Anda mengalami beberapa gejala Hordeolum (Stye).';
      }
      return 'Anda mengalami 2 gejala Hordeolum (Stye).';
    }
    return 'Anda mengalami gejala mata seperti kelilipan. Belum bisa dipastikan apa diagnosa yang1tepat.';
  }
  if (G18 == 1) {
    if (G19 == 1) {
      if (G20 == 1) {
        return 'Anda didiagnosa mengalami Alblasio Retina.';
      }
      return 'Anda didiagnosa mengalami Retinopati Diabetikum.';
    }
    return 'Anda mengalami gejala penglihatan kabur. Belum bisa dipastikan apa diagnosa yang tepat.';
  }
  if (G24 == 1) {
    return 'Anda didiagnosa mengalami Eksoftalmus.';
  }
  if (G25 == 1) {
    if (G35 == 1) {
      if (G36 == 1) {
        if (G37 == 1) {
          return 'Anda didiagnosa mengalami Trombosis Sinus Kavernosus.';
        }
        return 'Anda mengalami beberapa gejala Trombosis Sinus Kavernosus.';
      }
      return 'Anda mengalami 2 gejala Trombosis Sinus Kavernosus.';
    }
    return 'Anda mengalami gejala Deman. Belum bisa dipastikan apa diagnosa yang tepat.';
  }
  if (G38 == 1) {
    if (G39 == 1) {
      return 'Anda didiagnosa mengalami Optic Neuritis.';
    }
    return 'Anda mengalami gejala Sakit dengan gerakan mata. Belum bisa dipastikan apa diagnosa yang tepat.';
  }
  if (G14 == 1) {
    if (G25 == 1) {
      if (G27 == 1) {
        if (G40 == 1) {
          if (G41 == 1) {
            return 'Anda didiagnosa mengalami Dakriotitis.';
          }
          return 'Anda mengalami beberapa gejala Dakriotitis.';
        }
        return 'Anda mengalami beberapa gejala Dakriotitis.';
      }
      return 'Anda mengalami 2 gejala Dakriotitis.';
    }
    return 'Anda mengalami gejala mata berair. Belum bisa dipastikan apa diagnosa yang tepat.';
  };
};

// Output Testing Trough Node Js : node chatbot-algorithm.js
// console.log(diagnose(G1=1, G2=1, G3=0, G4=1, G5=0, G6=0, G7=0, G8=0, G9=0, G10=0, G11=1));
// console.log(diagnose(G1=1, G2=1, G3=1, G4=1, G5=0, G6=0, G7=0, G8=0, G9=0, G10=0, G11=1));
// console.log(diagnose(G1=0, G2=1, G3=0, G4=0, G5=0, G6=0, G7=0, G8=0, G9=0, G10=0, G11=1));
// console.log(diagnose(G1=0, G2=1, G3=1, G4=0, G5=0, G6=0, G7=0, G8=0, G9=0, G10=0, G11=1, G12=0));
// console.log(diagnose(G1=0, G2=0, G3=0, G4=1, G5=0, G6=0, G7=0, G8=0, G9=0, G10=0, G11=1, G12=0, G13=1));
// console.log(diagnose(G1=0, G2=0, G3=0, G4=0, G5=0, G6=0, G7=0, G8=0, G9=0, G10=0, G11=1, G12=0, G13=0, G14=1));

module.exports = diagnose;
