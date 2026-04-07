const button = document.getElementById("buttonn");
const inputField = document.getElementById("redacao");

button.addEventListener("click", () => {

    const text = inputField.value; 

    localStorage.removeItem("savedText")

    localStorage.setItem("savedText", text); 

    alert("redação salva.")
    alert(text);
});
