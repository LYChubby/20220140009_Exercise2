document.querySelector(".submit-btn").addEventListener("click", function () {
  event.preventDefault();

  var nama = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("nohp").value;
  var ruangan = document.querySelector("input[name=ruangan]:checked");
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var seats = document.getElementById("seats").value;

  if (nama === "" || email === "" || phone === "" || !ruangan || date === "" || time === "" || seats === "") {
    Swal.fire({
      title: "Error!",
      text: "Please fill out all fields",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Booking Details",
      html: `Name: ${nama}<br>Email: ${email}<br>Phone: ${phone}<br>Movie: Haikyu!! The Dumpster Battle Ticket Purchase<br>Room: ${ruangan.value}<br>Date: ${date} Time: ${time}<br>Seats: ${seats}`,
      icon: "success",
    });
  }
});
