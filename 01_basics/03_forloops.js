// *********************for loop syntax*********************************
// for loops are used to repeat a block of code but in that condition 
// where we know... where the condition should be stoped,
// You’re working with arrays or counting.

// for (let i = 0; i <= 10; i++) {
//     const result = i;
//     if (result === 5) {
//         console.log("5 is the best No");
        
//     }
//     console.log(result);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop value: ${i} and outer loop value ${j}` );
//         console.log(i + `*` + j + `=` + i*j);
//     }
// }
// ***********************for loop used for array******************
// let array = ["Superman", "Spiderman", "Ironman"]
// console.log(array.length);

// for (let i = 0; i <= array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
    
// }

// ****************Break & Continue Keywords***************************

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`5 Detected`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`5 Detected`);
//         continue
//     }
//     console.log(`Value of i is ${i}`);
// }