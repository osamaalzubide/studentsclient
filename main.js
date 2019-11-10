// fetch('http://localhost:3000/student')
// .then(function(response) {
//     return response.json();
// }) .then(function(myjson){
//     console.log(json.stringify(myjson));
// });


// const resultContainer = document.querySelector('.result-container');
// const loadTutsBtn = document.querySelector('.load-tuts');

// function loadTutorials() {
//   fetch('http://localhost:3000/student?page=')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(tutorials) {
//     tutorials.forEach(function(tutorial) {
//         const div = document.createElement('div');
//         div.innerHTML = tutorial.name;
//         resultContainer.appendChild(div);      
//     });

//   });
// }

// loadTutsBtn.addEventListener('click', function() {
//   resultContainer.innerHTML = '';
//   loadTutorials();
// })
