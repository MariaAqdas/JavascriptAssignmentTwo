//question : 1

// function addingNumber(number) {
//     return function(a) {
//       return a + number;
//     }
//   }
//  const adding = addingNumber(10);
//  console.log(adding(100));
//  console.log(adding(300));




//question : 2

// const countings = [1,2,3,4,5, 6, 7];

// function SearchingNumbers(arr, value) {
//   if (arr.length === 0) {
//     return false;
//   } else if (arr[0] === value) {
//     return true;
//   } else {
//     return SearchingNumbers(arr.slice(1), value);
//   }
// }

// console.log(SearchingNumbers(countings, 2));
// console.log(SearchingNumbers(countings, 6));



//question : 3

//    function addingPara() {
//         const textsDiv = document.getElementById('texts');
//         const newParagraph = document.createElement('p');
//         newParagraph.textContent = 'This is a new paragraph.';
//         textsDiv.appendChild(newParagraph);
//       }




//question : 4


// function addingList() {
//     const myList = document.getElementById('myList');
//     const newListItem = document.createElement('li');
//     newListItem.textContent = 'ORANGES';
//     myList.appendChild(newListItem);
//   }


//question : 5 


// function changeDivColor() {
//     let element = document.getElementById("myElement");
//     let color = "green";
//     element.style.backgroundColor = color;
//   }
  


//question : 6 


// function objectValue() {
//     let key = "Key";
//     let object = { 
//       name: "Maria", 
//       age: 29, 
//     };
//     localStorage.setItem(key, JSON.stringify(object));
//   }
  

//question : 7 

// function getObject() {
//     let key = "Key";
//     let object = JSON.parse(localStorage.getItem(key));
//     return object;
//   }
  


//question : 8


// function save() {
//     let myObject = { 
//       name: "Maria", 
//       age: 29,
//       city: "Karachi"
//     };
    

//     for (let key in myObject) {
//       localStorage.setItem(key, myObject[key]);
//     }
    

//     let retrievedObject = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       let key = localStorage.key(i);
//       retrievedObject[key] = localStorage.getItem(key);
//     }
//     return retrievedObject;
//   }
  