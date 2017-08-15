function getTempPromise(location){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(20);
      reject('In your face man!');
    },1000)
  });
};

// getTempPromise('Tehran').then(function(temp)
// {
//   console.log('Promise Success',temp);
// },function(err){
//   console.log('Promise error',err);
// });

function addPromise(a,b)
{
  return new Promise(function(resolve,reject){
    if(typeof a === 'number' && typeof b === 'number')
      resolve(a+b);
    else
      reject('Wrong input type');
  });
}

addPromise(10,2).then(function(result){
  console.log('promise Ok',result);
}, function(err){
  console.log('promise error',err);
});
