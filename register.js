const scriptURL = "https://script.google.com/macros/s/AKfycbyZeq3uT5GbfnNJjk28RArkZlc045pURtB7g0anQ1Ja_FoVUL85ztmE57APyYQ0Dvrszg/exec";
const form = document.forms["googleSheet"];
const msg = document.getElementById("msg");
const submitButton = document.getElementById("register-btn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  submitButton.disabled = true;
  submitButton.innerHTML = "Submitting...";
  submitButton.style.backgroundColor = "yellow";
  submitButton.style.color = "black";

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
      setInterval(document.getElementById("gfg-body").style.filter="blur(15px)", 1000)
      setInterval(document.getElementById("popUP").classList.add("openPOPUP"), 1000)
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


function closePOPUP() {
  document.getElementById("popUP").classList.remove("openPOPUP");
  document.getElementById("gfg-body").style.filter = "";
}


function updateRequirements() {
  var currentYear = document.getElementById('year').value;
  if (currentYear = '2') {
    doccument.getElementById('resume-link').required = true;
  } else {
    doccument.getElementById('resume-link').required = false;
  }
}



document.getElementById("join-btn").addEventListener("click", () => {
  document.getElementById("formstart").scrollIntoView({
    behavior: "smooth"
  });
})
document.getElementById("nav-join-btn").addEventListener("click", () => {
  document.getElementById("formstart").scrollIntoView({
    behavior: "smooth"
  });
})
