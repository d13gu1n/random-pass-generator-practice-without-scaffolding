function pass(length: number = 12): string {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%()_-+=";
    let password = "";
    for(let i = 0; i < length; i++) {
        const ind = Math.floor(Math.random() * char.length);
        password += char[ind];
    }
    return password;
}

const btn = document.getElementById("generateButton") as HTMLButtonElement;
const inp = document.getElementById("password") as HTMLInputElement;
const passLen = document.getElementById("passwordLength") as HTMLInputElement;
const lenWarning = document.getElementById("warning") as HTMLInputElement;

btn.addEventListener("click", () => {
    if (lenWarning.classList.contains("length-warning")) {
        lenWarning.innerHTML = "";
        lenWarning.classList.remove("length-warning");
        lenWarning.classList.add("hidden-length-warning");
    }
    let length = parseInt(passLen.value, 10);

    if (length < 8) {
        lenWarning.innerHTML = "The password's length should be greater than 8";
        lenWarning.classList.remove("hidden-length-warning");
        lenWarning.classList.add("length-warning");
        length = 8;
    }
    if (length > 20) {
        lenWarning.innerHTML = "The password's length should not exceed 20 characters";
        lenWarning.classList.remove("hidden-length-warning");
        lenWarning.classList.add("length-warning");
        length = 20;
    }

    const password = pass(length);
    inp.value = password;
});