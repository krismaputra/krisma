var calculator =
  {
  tambah : function(a,b){
    return a+b;
  },
  kurang :function(a,b){
  return a-b;
},
  kali  :function(a,b){
    return a*b;
  },
  bagi :function(a,b){
    return a/b;
  },
  samadengan : function(a,b){
    //jika lebih besar a
    if(a>b)
    {
      return a+ 'lebih besar dari'+b;
    }
    else if(a<b)
    {
      return a+ 'lebih kecil dari'+b;
    }
    else
    {
      return a+ 'sama dengan' +b;
    }
  }

};

console.log("2+3="+calculator.tambah(2,3));
console.log("3*3"+calculator.kali(3,3));
console.log("4-2"+calculator.kurang(4,2));
console.log("5 dibandingka 4"+calculator.samadengan(5,4));
console.log("8:4= "+calculator.bagi(8,4));
