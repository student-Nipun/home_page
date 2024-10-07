console.log("This is a practice of Function Topic");

// function greet(name, greettext){
//     let name1 = "This is a lady";
//     console.log(name1);
//     console.log(greettext + " " + name);
//     console.log(name + " is a good boy");
//     // console.log( ` ${name} is a good boy`);
//     // ese ham ese bhi likh skte hai
// }


// let name = "Mohan";
// let name1 = "Sohan";
// let name2 = "Rohan";
// let name3 = "RAM";
// let om = "krishna";
// let greettext = "Good Morning"

// greet(name , greettext);
// greet(name1 , greettext);
// greet(name2 , greettext);
// greet(name3 , greettext);
// greet(om , greettext);

function maximum(a,b){
    let d = if (a>b){
        console.log("A is greater than B");
    }
    else{
        console.log("B is greater than A ");
    }
    return(d);
}

let returnval = maximum(50,90);
console.log(returnval);