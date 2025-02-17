from flask import Flask, request
import subprocess

app = Flask(__name__)

@app.route("/spustit", methods=["POST"])
def spustit():
    kod = request.form["kod"]

    try:
        # Uložení kódu do souboru
        with open("kod.java", "w") as f:
            f.write(kod)

        # Kompilace kódu
        subprocess.run(["javac", "kod.java"], check=True)

        # Spuštění kódu
        vystup = subprocess.check_output(["java", "kod"]).decode("utf-8")

        return vystup
    except subprocess.CalledProcessError as e:
        return "Chyba: " + str(e)
    except Exception as e:
        return "Chyba: " + str(e)

if __name__ == "__main__":
    app.run(debug=True)
