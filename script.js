document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("msg").innerText =
    "Your booking has been received. We will contact you soon.";

  this.reset();
});