let tlacitkoSubmit = document.querySelectorAll("[name=barva-sabmit]")[0];
console.log(tlacitkoSubmit);

tlacitkoSubmit.addEventListener("click", (e) => {
   e.preventDefault();

    let inputBarvaKolecka = document.querySelectorAll("#kocka")[0];
    console.log(inputBarvaKolecka.value);

    let mujDiv = document.createElement("div"); 
    mujDiv.classList.add("kolecko");

    let elmKun = document.querySelectorAll(".kun")[0];  
    elmKun.appendChild(mujDiv);   

    mujDiv.style.backgroundColor = inputBarvaKolecka.value;
 
});