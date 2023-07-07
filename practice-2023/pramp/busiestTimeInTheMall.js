// PRAMP 2023

// MAR 30

function findBusiestPeriod(data) {

}




///////////////////////////////////////////////
///////////////////////////////////////////////
// my solution from PRAMP 2022
/*
function findBusiestPeriod(data) {
  // your code goes here
  
  
  // [[ts0, tsTotal00],
  //  [ts0, tsTotal01],
  //  [ts1, tsTotal10],
  //  [ts2, tsTotal20]
  // ...]
  
  let tsTotals = data.map(getTsTotals, { prevTotal: 0 });
  
  console.log('tsTotals:', tsTotals);
  
  //[maxTs, maxTsTotal]
  let maxEntry = tsTotals.reduce(findMax);
  
  console.log('maxEntry:', maxEntry);
  
  //maxTs
  return maxEntry[0];
 
}



const getTsTotals = function (elem, i, arr) {
  console.log('inside getTsTotals')
  let ts = elem[0];
  let delta = elem[1];
  let out_in = elem[2];

  if(out_in === 0) {
    delta *= -1;
  }
  
  console.log('this.prevTotal:', this.prevTotal)
  
  this.prevTotal += delta;
  
  return [ts, this.prevTotal];
}


const findMax = (maxElem, elem, i, arr) => {
  let ts = elem[0];
  let total = elem[1];
  (i === arr.length-1 || ts !== arr[i+1][0]) && total > maxElem[1] ? maxElem = elem : maxElem = maxElem; 
  return maxElem
}

*/
