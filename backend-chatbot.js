const [
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
// INPUT
const d_1 = G1 
const d_2 = G2
const d_3 = G3
const d_4 = G4
const d_5 = G5
const d_6 = G6
const d_7 = G7
const d_8 = G8

console.log(G1)
console.log(G8)
console.log(d_1)
console.log(d_8)

const input_diagnose = {d_1,d_2,d_3,d_4,d_5,d_6,d_7,d_8}
// ALGORITHM
const diagnose = () => {
    if (d_1 == G1){
        if (d_2 == G2){
          if (d_3 == G3){
            if (d_4 == G4){
              if (d_5 == G14){
                if (d_6 == G27){
                  if (d_7 == G28){
                    if (d_8 == G34){
                      return 'anda didiagnosa menderita Ulkus Kornea'
                    }
                    return 'anda mengelami beberapa gejala Ulkus Kornea'
                  }
                  return 'anda mengelami beberapa gejala Ulkus Kornea'
                }
                return 'anda mengelami beberapa gejala Ulkus Kornea'
              }
              return 'anda mengelami beberapa gejala Ulkus Kornea'
            }
            return 'anda mengelami beberapa gejala Ulkus Kornea'
          }
          if (d_3 == G12){
            if (d_4 == G14){
              if (d_5 == G28){
                return 'anda didiagnosa menderita Konjungtivitis'
              }
              return 'anda mengelami beberapa gejala Konjungtivitis'
            }
            return 'anda mengelami beberapa gejala Konjungtivitis'
          }
          if (d_3 == G14){
            if (d_4 == G18){
              if (d_5 == G27){
                if (d_5 == G28){
                  if (d_5 == G29){
                    return 'anda didiagnosa menderita Keratitis Pungtata Superfisialis'
                  }
                  return 'anda mengalami beberapa gejala Keratitis Pungtata Superfisialis'
                }
                return 'anda mengalami beberapa gejala Keratitis Pungtata Superfisialis'
              }
              return 'anda mengalami beberapa gejala Keratitis Pungtata Superfisialis'
            }
            return 'anda mengalami beberapa gejala Keratitis Pungtata Superfisialis'
          }
          if (d_3 == G21){
            if (d_4 == G22){
              return 'anda didiagnosa menderita Katarak'
            }
            return 'anda mengalami beberapa gejala Katarak'
          }
          if (d_3 == G23){
            if (d_4 == G34){
              return 'P017'
            }
          }
        }
        if (d_2 == G5){
          if (d_3 == G9){
            if (d_4 == G10){
              return 'P004'
            }
          }
        }
        if (d_2 == G11){}
        if (d_2 == G14){
          if (d_4 == G18){
            if (d_5 == G21){
              return 'P002'
            }
          }
        }
        if (d_2 == G18){
          if (d_3 == G23){
            return 'P012'
          }
        }
      }
      if (d_1 == G2){
        if (d_2 == G5){
          if (d_3 == G14){
            if (d_4 == G27){
              if (d_5 == G35){
                if (d_6 == G43){
                  if (d_7 == G44){
                    return 'P010'
                  }
                }
              }
            }
          }
          if (d_3 == G25){
            if (d_4 == G26){
              return 'P013'
            }
          }
        }
      }
      if (d_1 == G5){
        if (d_2 == G6){
          if (d_3 == G7){
            if (d_4 == G8){return 'P003'}
          }
        }
        if (d_2 == G16){
          if (d_3 == G17){
            return 'P007'
          }
        }
      }
      if (d_1 == G12){
        if (d_2 == G28){
          if (d_3 == G30){
            if (d_4 == G31){return 'P016'}
          }
        }
      }
      if (d_1 == G13){
        if (d_2 == G14){
          if (d_3 == G15){
            if (d_4 == G27){return 'P005'}
          }
        }
      }
      if (d_1 == G18){
        if (d_2 == G19){
          if (d_3 == G20){
            return 'P008'
          }
          else if (d_3 !== G20){
            return 'P009'
          }
        }
      }
      if (d_1 == G24){
        return 'P014'
      }
      if (d_1 == G25){
        if (d_2 == G35){
          if (d_3 == G36){
            if (d_4 == G37){
              return 'P018'
            }
          }
        }
      }
      if (d_1 == G38){
        if (d_2 == G39){
          return 'P019'
        }
      }
      if (d_1 == G14){
        if (d_2 == G25){
          if (d_3 == G27){
            if (d_4 == G40){
              if (d_5 == G41){
                return 'P020'
              }
            }
          }
        }
      }
}


console.log(diagnose(d_1,d_2,d_3,d_4,d_5,d_6,d_7,d_8))