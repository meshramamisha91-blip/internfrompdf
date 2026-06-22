

const form = document.getElementById("myForm");
const loader = document.getElementById("loader");
const box = document.getElementById("formBox");

form.addEventListener("submit", function(e){
e.preventDefault();

loader.style.display = "flex";

let data = {
name: form.querySelector("input:nth-child(2)").value,
email: form.querySelector("input:nth-child(4)").value,
project: form.querySelector("input:nth-child(6)").value,
desc: form.querySelector("textarea").value
};

fetch("https://script.google.com/macros/s/AKfycbzfXH5HmAkOutXmXqCDXmEzYgpx0z6UJAd1S7MUoTqD5CyEksdLCQjmCkdgsmWYFtHZ/exec",{
method:"POST",
body: JSON.stringify(data)
})
.then(res=>res.text())
.then(d=>{

loader.style.display="none";

box.innerHTML =
"<h2 style='color:#00ffcc;text-align:center'>✅ Form Submitted Successfully</h2>";

});
});

