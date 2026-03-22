// code that written in curly bracket ({...}) is known as the local scope and outer (let a = 300 ) is known as the 
// global scope

// let a = 300 

// if (true) {
//     let a = 10
//     const b = 20

    
// }

// console.log(a);
// // console.log(b);
// // console.log(c);
//  **************** Nested function*****************************************

function one (){
    const username = "Love"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}
one()