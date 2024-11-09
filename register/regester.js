console.log("ugly")

let Participant = 1;
let feeTotal = 0;
let feeElements;

console.log(Participant +" Participant")

function addParticipant(){

    Participant = Participant +1;
    console.log(Participant +" Participant")

    
    const newSection = document.createElement("section");
    newSection.className = "participant";
    newSection.innerHTML = `
        <p>Participant ${Participant}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname${Participant}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity${Participant}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee${Participant}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date${Participant}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`;
        const participantFieldset = document.querySelector(".participants");
        participantFieldset.appendChild(newSection);
}

function total(element1) {
  feeTotal += parseInt(element1.value);
}

function totalFees() {
  // the selector below lets us grab any element that has an id that begins with "fee"
  feeElements = document.querySelectorAll("[id^=fee]");
  console.log(feeElements);
  // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
  // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
  // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
  feeElements = [...feeElements];
  console.log(feeElements);
  // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.

  feeElements.forEach(total)
  // Remember that the text that was entered into the input element will be found in the .value of the element.
  
  // once you have your total make sure to return it!
  return 5;
  }

function submitForm(event) {
    event.preventDefault();

    let fees = totalFees();

    let adultName = document.getElementById("adult_name").value;

    document.getElementById("FormId").style.display = "none";
    const newSection = document.createElement("section");
    newSection.innerHTML = `
    <h1>Thank you ${adultName} for registering. You have registered ${Participant} participants and owe $${feeTotal} in Fees.</h1>
    `;

    const participantFieldset = document.querySelector(".testbox");
    participantFieldset.appendChild(newSection);
}

const form = document.getElementById("FormId");
form.addEventListener("submit", submitForm);

