// JavaScript to display a welcome message to the user
welcomeMessage();

// Function to display a welcome message to the user
function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("Welcome to Dzaky Company! Siapa Nama Kamu?");

    // Handle case where user cancels or enters an empty name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message
    document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}! Welcome to Dzaky Company.`;
}

// Function to handle message submission (currently empty)
function submitMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const birthdate = document.getElementById("birthdate");

    const gender = document.querySelector('input[name="gender"]:checked');

    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");
    const errorGender = document.getElementById("error-gender");
    const errorBirthdate = document.getElementById("error-birthdate");

    let isValid = true;

    // reset semua error
    hideError(errorName);
    hideError(errorEmail);
    hideError(errorMessage);
    hideError(errorGender);
    hideError(errorBirthdate);

    // validasi nama
    if (name.value.trim() === "") {
        showError(errorName, "Name is required");
        isValid = false;
    }

    // validasi email
    if (email.value.trim() === "") {
        showError(errorEmail, "Email is required");
        isValid = false;
    } else if (!email.value.includes("@")) {
        showError(errorEmail, "Email format is not valid");
        isValid = false;
    }

    // validasi gender
    if (!gender) {
        showError(errorGender, "Please select gender");
        isValid = false;
    }

    // validasi tanggal lahir
    if (birthdate.value === "") {
        showError(errorBirthdate, "Birth date is required");
        isValid = false;
    }

    // validasi message
    if (message.value.trim() === "") {
        showError(errorMessage, "Message is required");
        isValid = false;
    }

    // jika ada error → stop
    if (!isValid) return;

    // tampilkan hasil
    document.getElementById("hasil").innerHTML = `
    <h3 class="text-lg font-bold mb-2">Hubungi Kami</h3>
    <p><strong>Name:</strong> ${name.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Gender:</strong> ${gender.value}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthdate.value}</p>
    <p><strong>Message:</strong> ${message.value}</p>
  `;

    // AUTO RESET FORM
    event.target.reset();
}

// helper
function showError(element, message) {
    element.textContent = message;
    element.classList.remove("hidden");
}

function hideError(element) {
    element.textContent = "";
    element.classList.add("hidden");
}
