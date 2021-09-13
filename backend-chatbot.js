let [
  G1,G2,G3,G4,G5,G6,G7,G8,G9,G10,
  G11,G12,G13,G14,G15,G16,G17,G18,G19,G20,
  G21,G22,G23,G24,G25,G26,G27,G28,G29,G30,
  G31,G32,G33,G34,G35,G36,G37,G38,G39,G40,
  G41,G42,G43,G44,G45
] = [
  'Gejala 1','Gejala 2','Gejala 3','Gejala 4','Gejala 5',
  'Gejala 6','Gejala 7','Gejala 8','Gejala 9','Gejala 10',
  'Gejala 11','Gejala 12','Gejala 13','Gejala 14','Gejala 15',
  'Gejala 16','Gejala 17','Gejala 18','Gejala 19','Gejala 20',
  'Gejala 21','Gejala 22','Gejala 23','Gejala 24','Gejala 25',
  'Gejala 26','Gejala 27','Gejala 28','Gejala 29','Gejala 30',
  'Gejala 31','Gejala 32','Gejala 33','Gejala 34','Gejala 35',
  'Gejala 36','Gejala 37','Gejala 38','Gejala 39','Gejala 40',
  'Gejala 41','Gejala 42','Gejala 43','Gejala 44','Gejala 45',
];

// node backend-chatbot.js
// 8 INPUT gejala
let g_1 = G1 
let g_2 = G2
let g_3 = G3
let g_4 = G4
let g_5 = G5
let g_6 = G6
let g_7 = G7
let g_8 = G8

// ALGORITHM
const diagnose = () => {
  if (g_1 == G1){
    if (g_2 == G2){
      if (g_3 == G3){
        if (g_4 == G4){
          if (g_5 == G14){
            if (g_6 == G27){
              if (g_7 == G28){
                if (g_8 == G34){
                  return 'Anda didiagnosa mengalami Ulkus Kornea'
                }
                return 'Anda mengelami beberapa gejala Ulkus Kornea'
              }
              return 'Anda mengelami beberapa gejala Ulkus Kornea'
            }
            return 'Anda mengelami beberapa gejala Ulkus Kornea'
          }
          return 'Anda mengelami beberapa gejala Ulkus Kornea'
        }
        return 'Anda mengelami beberapa gejala Ulkus Kornea'
      }
      if (g_3 == G12){
        if (g_4 == G14){
          if (g_5 == G28){
            return 'Anda didiagnosa mengalami Konjungtivitis'
          }
          return 'Anda mengelami beberapa gejala Konjungtivitis'
        }
        return 'Anda mengelami beberapa gejala Konjungtivitis'
      }
      if (g_3 == G14){
        if (g_4 == G18){
          if (g_5 == G27){
            if (g_5 == G28){
              if (g_5 == G29){
                return 'Anda didiagnosa mengalami Keratitis Pungtata Superfisialis'
              }
              return 'Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis'
            }
            return 'Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis'
          }
          return 'Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis'
        }
        return 'Anda mengalami beberapa gejala Keratitis Pungtata Superfisialis'
      }
      if (g_3 == G21){
        if (g_4 == G22){
          return 'Anda didiagnosa mengalami Katarak'
        }
        return 'Anda mengalami beberapa gejala Katarak'
      }
      if (g_3 == G23){
        if (g_4 == G34){
          return 'Anda didiagnosa mengalami Endoftalmitis'
        }
        return 'Anda mengalami beberapa gejala Endoftalmitis'
      }
    }
    if (g_2 == G5){
      if (g_3 == G9){
        if (g_4 == G10){
          return 'Anda didiagnosa mengalami Blefaritis'
        }
        return 'Anda mengalami beberapa gejala Blefaritis'
      }
      return 'Anda mengalami 2 gejala Blefaritis'
    }
    if (g_2 == G14){
      if (g_4 == G18){
        if (g_5 == G21){
          return 'Anda didiagnosa mengalami Keratokonus'
        }
        return 'Anda mengalami beberapa gejala Keratokonus'
      }
      return 'Anda mengalami 2 gejala Keratokonus'
    }
    if (g_2 == G18){
      if (g_3 == G23){
        return 'Anda didagnosa mengalami Uveitis'
      }
      return 'Anda mengalami 2 gejala Uveitis'
    }
    return 'Anda mengalami gejala fotofobia. Belum bisa dipastikan apa diagnosa yang tepat.'
  }
  if (g_1 == G2){
    if (g_2 == G5){
      if (g_3 == G14){
        if (g_4 == G27){
          if (g_5 == G35){
            if (g_6 == G43){
              if (g_7 == G44){
                return 'Anda didiagnosa mengalami Glaukoma'
              }
              return 'Anda mengalami beberapa gejala Glaukoma'
            }
            return 'Anda mengalami beberapa gejala Glaukoma'
          }
          return 'Anda mengalami beberapa gejala Glaukoma'
        }
        return 'Anda mengalami beberapa gejala Glaukoma'
      }
      if (g_3 == G25){
        if (g_4 == G26){
          return 'Anda didiagnosa mengalami Selulitis Orbitalis'
        }
        return 'Anda mengalami beberapa gejala Selulitis Orbitalis'
      }
      return 'Anda mengalami 2 gejala yang bisa jadi Glaukoma atau Selulitis Orbitalis.'
    }
    return 'Anda mengalami gejala mata terasa nyeri. Belum bisa dipastikan apa diagnosa yang tepat.'
  }
  if (g_1 == G5){
    if (g_2 == G6){
      if (g_3 == G7){
        if (g_4 == G8){
          return 'Anda didiagnosa mengalami Kalazion'
        }
        return 'Anda mengalami beberapa gejala Kalazion'
      }
      return 'Anda mengalami 2 gejala Kalazion'
    }
    if (g_2 == G16){
      if (g_3 == G17){
        return 'Anda didiagnosa mengalami Trakoma'
      }
      return 'Anda mengalami 2 gejala Trakoma'
    }
    return 'Anda mengalami gejala kelopak mata membengkak. Belum bisa dipastikan apa diagnosa yang tepat.'
  }
  if (g_1 == G12){
    if (g_2 == G28){
      if (g_3 == G30){
        if (g_4 == G31){
          return 'Anda didiagnosa mengalami Alergi Mata Merah'
        }
        return 'Anda mengalami beberapa gejala Alergi Mata Merah'
      }
      return 'Anda mengalami 2 gejala Alergi Mata Merah'
    }
    return 'Anda mengalami gejala mata terasa panas. Belum bisa dipastikan apa diagnosa yang tepat.'
  }
  if (g_1 == G13){
    if (g_2 == G14){
      if (g_3 == G15){
        if (g_4 == G27){
          return 'Anda didiagnosa mengalami Hordeolum (Stye)'
        }
        return 'Anda mengalami beberapa gejala Hordeolum (Stye)'
      }
      return 'Anda mengalami 2 gejala Hordeolum (Stye)'
    }
    return 'Anda mengalami gejala mata seperti kelilipan. Belum bisa dipastikan apa diagnosa yang tepat.'
  }
  if (g_1 == G18){
    if (g_2 == G19){
      if (g_3 == G20){
        return 'Anda didiagnosa mengalami Alblasio Retina'
      }
      return 'Anda didiagnosa mengalami Retinopati Diabetikum'
    }
    return 'Anda mengalami gejala penglihatan kabur. Belum bisa dipastikan apa diagnosa yang tepat.'
  }
  if (g_1 == G24){
    return 'Anda didiagnosa mengalami Eksoftalmus'
  }
  if (g_1 == G25){
    if (g_2 == G35){
      if (g_3 == G36){
        if (g_4 == G37){
          return 'Anda didiagnosa mengalami Trombosis Sinus Kavernosus'
        }
        return 'Anda mengalami beberapa gejala Trombosis Sinus Kavernosus'
      }
      return 'Anda mengalami 2 gejala Trombosis Sinus Kavernosus'
    }
    return 'Anda mengalami gejala Deman. Belum bisa dipastikan apa diagnosa yang tepat.'
  }
  if (g_1 == G38){
    if (g_2 == G39){
      return 'Anda didiagnosa mengalami Optic Neuritis'
    }
    return 'Anda mengalami gejala Sakit dengan gerakan mata. Belum bisa dipastikan apa diagnosa yang tepat.'
  }
  if (g_1 == G14){
    if (g_2 == G25){
      if (g_3 == G27){
        if (g_4 == G40){
          if (g_5 == G41){
            return 'Anda didiagnosa mengalami Dakriotitis'
          }
          return 'Anda mengalami beberapa gejala Dakriotitis' 
        }
        return 'Anda mengalami beberapa gejala Dakriotitis'
      }
      return 'Anda mengalami 2 gejala Dakriotitis'
    }
    return 'Anda mengalami gejala mata berair. Belum bisa dipastikan apa diagnosa yang tepat.'
  }  
}

// OUTPUT
console.log(diagnose(g_1,g_2,g_3,g_4,g_5,g_6,g_7,g_8))
console.log(diagnose(g_1=G24,g_2,g_3,g_4,g_5=G34,g_6,g_7,g_8=G30))
console.log(diagnose(g_1=G25,g_2=G44,g_3,g_4,g_5,g_6,g_7,g_8=G30))

// Masalah utama :
// 1. Misal dia isi 8 gejala, G1, G24, G35, G44, G8, G9, G7
// Tidak ada penyakit dengan gejala tersebut. Value apa yang harus dikembalikan ke pengguna.