function spustitKod() {
    var kod = document.getElementById("javaKod").value;

    // Vytvoření požadavku na server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/spustit", true); // Nahraďte "/spustit" URL adresou vašeho serveru
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Odeslání kódu na server
    xhr.send("kod=" + encodeURIComponent(kod));

    // Zpracování odpovědi ze serveru
    xhr.onload = function() {
        if (this.status == 200) {
            document.getElementById("vysledek").innerHTML = this.responseText;
        } else {
            document.getElementById("vysledek").innerHTML = "Chyba: " + this.status;
        }
    }
}
