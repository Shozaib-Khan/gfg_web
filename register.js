const scriptURL = "https://script.google.com/macros/s/AKfycbyZeq3uT5GbfnNJjk28RArkZlc045pURtB7g0anQ1Ja_FoVUL85ztmE57APyYQ0Dvrszg/exec";
const form = document.forms["googleSheet"];
const msg = document.getElementById("msg");
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  submitButton.disabled = true;
  submitButton.innerHTML = "Submitting...";
  submitButton.style.backgroundColor = "yellow";
  submitButton.style.color="black";

  try {
    const submissionTime = new Date().toLocaleString();
    const formData = new FormData(form);
    formData.append("Submission_time", submissionTime);

    const response = await fetch(scriptURL, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      submitButton.innerHTML = "Form Submitted";
      window.scrollTo({
        top: 0,
        behavior: 'auto' 
      });
      setInterval(document.getElementById("popUP").classList.add("openPOPUP"),1500)
      form.reset();
    } else {
      throw new Error("Error recording submission");
      submitButton.disabled = false;
    }

  } catch (error) {
    console.error("Error!", error.message);
    submitButton.disabled = false;
  }
});


function updateRequirements() {
  var currentYear = document.getElementById('year').value;
  if (currentYear = '2') {
    doccument.getElementById('resume-link').required = true;
  } else {
    doccument.getElementById('resume-link').required = false;
  }
}

// let popup = document.getElementById("popUP");
// console.log(popup);

// function openPOPUP() {
//   popup.classList.add("openPOPUP");
// }

// addEventListener('submit', function closePOPUP(){
//   document.getElementById("popUP").classList.remove("openPOPUP");
// }
// )
