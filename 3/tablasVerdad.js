
let P = true;
let Q = true;

let P1 = true;
let Q1 = false;

let P2 = false;
let Q2 = true;

let P3 = false;
let Q3 = false;

let tablaA = [
  { P: P, Q: Q, NOTp: !P, NOTpANDq: !P && Q },
  { P: P1, Q: Q1, NOTp: !P1, NOTpANDq: !P1 && Q1 },
  { P: P2, Q: Q2, NOTp: !P2, NOTpANDq: !P2 && Q2 },
  { P: P3, Q: Q3, NOTp: !P3, NOTpANDq: !P3 && Q3 }

];

console.table(tablaA);

let tablaB = [
  { P: P, Q: Q, NOTp: !P,NOTq:!Q, NOTpANDNOTq: !P && !Q },
  { P: P1, Q: Q1, NOTp: !P1,NOTq:!Q1, NOTpANDNOTq: !P1 && !Q1 },
  { P: P2, Q: Q2, NOTp: !P2,NOTq:!Q2, NOTpANDNOTq: !P2 && !Q2 },
  { P: P3, Q: Q3, NOTp: !P3,NOTq:!Q3, NOTpANDNOTq: !P3 && !Q3 }

];

console.table(tablaB);