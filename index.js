"use strict";
(function() {
  //TODO 1
  //functions upon loading
  window.addEventListener('load', init);
  function init() {
    todaysDate();
    let addExercise = getId('add-exercise')
    addExercise.addEventListener('click', createExercise);
    let finishWorkout = getId('finish');
    finishWorkout.addEventListener('click', finalizeWorkout);
  };

  //TODO 2
  //lets keep our date id constantly updated
  //update the p tag with the date id
  function todaysDate() {
    const date = new Date();
    const year = date.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    let currentDate = document.getElementById("current-date");
    currentDate.textContent = month + " " + day + ", " + year;
  }

  //TODO 3
  //todo: create custom workout
  //only allow once for now, "TODAYS WORKOUT"
  let exerciseCount = 1; // Keeps track of how many exercises have been added

  function createExercise() {
      exerciseCount++; // Increment the exercise count to make each input unique

      // Create label for exercise-name
      let nameLabel = gen('label');
      nameLabel.setAttribute("for", `exercise-name-${exerciseCount}`);
      nameLabel.textContent = "Exercise Name";

      // Create input for exercise name
      let nameInput = gen('input');
      nameInput.type = "text";
      nameInput.id = `exercise-name-${exerciseCount}`;
      nameInput.name = "exercise-name";

      // Create label for sets
      let setLabel = gen('label');
      setLabel.setAttribute("for", `set-${exerciseCount}`);
      setLabel.textContent = "Sets";

      // Create input for sets
      let setInput = gen('input');
      setInput.type = "text";
      setInput.id = `set-${exerciseCount}`;
      setInput.name = "set";

      // Create label for reps
      let repLabel = gen('label');
      repLabel.setAttribute("for", `reps-${exerciseCount}`);
      repLabel.textContent = "Reps";

      // Create input for reps
      let repInput = gen('input');
      repInput.type = "text";
      repInput.id = `reps-${exerciseCount}`;
      repInput.name = "reps";

      // Create label for weight
      let weightLabel = gen('label');
      weightLabel.setAttribute("for", `weight-${exerciseCount}`);
      weightLabel.textContent = "Weight";

      // Create input for weight
      let weightInput = gen('input');
      weightInput.type = "text";
      weightInput.id = `weight-${exerciseCount}`;
      weightInput.name = "weight";

      let deleteButton = gen('p');
      deleteButton.textContent = "delete";
      deleteButton.className='delete-exercise';

      // Add a line break for spacing
      let br = gen('br');

      // Group the elements together in a container div
      let exerciseDiv = gen('div');
      exerciseDiv.className = "exercise-entry";

      // Append all the elements to the exerciseDiv
      exerciseDiv.appendChild(nameLabel);
      exerciseDiv.appendChild(nameInput);
      exerciseDiv.appendChild(setLabel);
      exerciseDiv.appendChild(setInput);
      exerciseDiv.appendChild(repLabel);
      exerciseDiv.appendChild(repInput);
      exerciseDiv.appendChild(weightLabel);
      exerciseDiv.appendChild(weightInput);
      exerciseDiv.appendChild(deleteButton);
      exerciseDiv.appendChild(br); // Add a break for spacing

      // Get the exercise container and append the new input fields
      let exerciseContainer = document.getElementById("exercise-container");
      exerciseContainer.appendChild(exerciseDiv);
  }

  function finalizeWorkout() {
    //qsa div class exercise-container
    let
    //create new div called workout rotutine
    //it has all the info in order
  }

  // Helper function to generate HTML elements
  function gen(tag) {
      return document.createElement(tag);
  }

  function createWorkoutInput(id) {
    let textInput = gen('input');
    textInput.type = "text";
    textInput.id = id;
    return textInput;
  }
































  //todo: create visual weight info (create graph by given user input)

  //create new elements
  function getId(id) {
    return document.getElementById(id)
  }
  function gen(tag) {
    return document.createElement(tag);
  }

  //qsa function
  function qsa(query) {
    return document.querySelectorAll(query);
  }
  //qs function
  function qs(query) {
    return document.querySelector(query);
  }
})();