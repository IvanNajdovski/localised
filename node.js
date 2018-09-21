var arr1 = ["Ivan","dime","Kriza","Vojce","martin"];
var arr2 = ["Ivan","dime","kejty","elena","martin"];
var arr3 =[];

var ivan = function(){
for(var i=0; i<arr1.lenght;i++){
    for(var j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            arr3.push(arr1[i])
        }
    }
    console.log(arr3)
}
}
console.log(ivan)
// var ivan = function(){
//     for(let item of arr1){
//         for(let item2 of arr2){
//             if(item === item2){
//                 arr3.push(item);
//             }
//         }
//
//     }
//     return arr3
// }
// console.log(ivan())


