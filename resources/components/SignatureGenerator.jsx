import React, { useState } from "react";
import "../css/SignatureGenerator.css";

const SignatureGenerator = () => {
  const [NomPrenom, setName] = useState("");
  const [Poste, setPoste] = useState("");
  const [Email, setEmail] = useState("");
  const [Téléphone, setTelephone] = useState("");
  const [Photo, setPhoto] = useState("");
  const [Bannière1, setBanniere1] = useState("");
  const [Bannière2, setBanniere2] = useState("");
  const [Bannière3, setBanniere3] = useState("");
  const [signature, setSignature] = useState("");
  const [isSaveButtonVisible, setSaveButtonVisible] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("Semafor"); // Par défaut : Semafor
  const [error, setError] = useState("");

  const downloadSignature = async () => {
    try {
      // Vérifier si l'API File System Access est disponible
      if (window.showSaveFilePicker) {
        const options = {
          suggestedName: "signature.html",
          types: [
            {
              description: "Fichier HTML",
              accept: { "text/html": [".html"] },
            },
          ],
        };

        // Ouvrir la boîte de dialogue pour choisir où enregistrer
        const fileHandle = await window.showSaveFilePicker(options);
        const writableStream = await fileHandle.createWritable();

        // Écrire les données dans le fichier
        await writableStream.write(signature);
        await writableStream.close();

        alert("La signature a été sauvegardée avec succès !");
      } else {
        // Fallback si l'API n'est pas disponible
        const element = document.createElement("a");
        const file = new Blob([signature], { type: "text/html" });
        element.href = URL.createObjectURL(file);
        element.download = "signature.html";
        document.body.appendChild(element);
        element.click();
        alert(
          "API File System Access non disponible, fichier téléchargé par défaut."
        );
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde :", error);
      alert("Une erreur s'est produite lors de la sauvegarde.");
    }
  };

  const generateSignature = () => {
    let bannersHtml = "";

    // Ajouter Bannière2 si elle n'est pas vide
    if (Bannière2.trim() !== "") {
      bannersHtml += `<tr>
            <td><img src="${Bannière2}" alt="Photo" width="300%"><br></td>
        </tr>`;
    }

    // Ajouter Bannière3 si elle n'est pas vide
    if (Bannière3.trim() !== "") {
      bannersHtml += `<tr>
            <td><img src="${Bannière3}" alt="Photo" width="300%"><br></td>
        </tr>`;
    }

    const companyInfo = {
      Semafor: {
        html: `<html>
    <head></head><body><table cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;" emb-background-style="" width="400" direction="ltr">
    <tbody>
        <tr>
            <td style="width:140px">
                <center>
                <table cellspacing="0" cellpadding="0" border="0" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="vertical-align:top;font-family:Poppins,Arial, Helvetica, sans-serif; font-size:16px">
<!-- Colonne de gauche -->
                                <table style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <center>
<!-- Photo salarié -->
                                                   <p>Semafor</p> <img src="${Photo}" alt="Photo" width="100"><br>
                                                </center>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <center>
<!-- Lien LinkedIn + site web -->
                                                    <p style="margin:10px auto 0;">
                                                        <a href="https://www.linkedin.com/company/semafor/?originalSubdomain=fr"><img src="https://zupimages.net/up/23/01/4jph.png" alt="Semafor" height="25"></a>
                                                        <a href="https://www.semafor.fr/"><img src="https://zupimages.net/up/23/01/0vzm.png" alt="Semafor" height="25"></a>
                                                    </p>
                                                </center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
            </td>
            <td style="width:290px">
                <table cellspacing="0" cellpadding="0" border="0" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="vertical-align:top;font-family:Poppins,Arial, Helvetica, sans-serif; font-size:16px">
<!-- Colonne de droite -->
                                <table style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr" emb-background-style="">
                                    <tbody>
                                        <tr>
                                            <td>
<!-- Nom salarié -->
                                                <span style="font-weight: 600;font-size:18px">
                                                    ${NomPrenom}
                                                </span><br>
<!-- Poste salarié -->
                                                <span style="font-style:normal;font-weight:normal;font-size:14px;">
                                                    ${Poste}
                                                </span><br>
                                                <p style="margin-top:5px;">
<!-- Mail salarié -->
                                                    <span style="color: black!important; text-decoration: underline; font-weight: 600;font-size:14px">
                                                        ${Email}
                                                    </span><br>
<!-- Tel salarié -->
                                                    <a href="tel:${Téléphone}" style="color: black; text-decoration: none; font-weight: 600;font-size:14px">
                                                        ${Téléphone}
                                                    </a>
                                                </p>
<!-- Encart entreprise -->
                                                    <img src="https://zupimages.net/up/23/01/kquk.gif" alt="Semafor" height="40">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
<!-- Bannière1 -->
        <tr>
            <td><img src="${Bannière1}" alt="Photo" width="300%"><br></td>
        </tr>
        ${bannersHtml} <!-- Ajout des bannières conditionnelles -->
    </tbody>
</table></body>
</html>`
      },
      E2I: {
        html: `<html>
    <head></head><body><table cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;" emb-background-style="" width="400" direction="ltr">
    <tbody>
        <tr>
            <td style="width:140px">
                <center>
                <table cellspacing="0" cellpadding="0" border="0" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="vertical-align:top;font-family:Poppins,Arial, Helvetica, sans-serif; font-size:16px">
<!-- Colonne de gauche -->
                                <table style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <center>
<!-- Photo salarié -->
                                                   <p>E2I</p> <img src="${Photo}" alt="Photo" width="100"><br>
                                                </center>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <center>
<!-- Lien LinkedIn + site web -->
                                                    <p style="margin:10px auto 0;">
                                                        <a href="https://www.linkedin.com/company/semafor/?originalSubdomain=fr"><img src="https://zupimages.net/up/23/01/4jph.png" alt="Semafor" height="25"></a>
                                                        <a href="https://www.semafor.fr/"><img src="https://zupimages.net/up/23/01/0vzm.png" alt="Semafor" height="25"></a>
                                                    </p>
                                                </center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
            </td>
            <td style="width:290px">
                <table cellspacing="0" cellpadding="0" border="0" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="vertical-align:top;font-family:Poppins,Arial, Helvetica, sans-serif; font-size:16px">
<!-- Colonne de droite -->
                                <table style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr" emb-background-style="">
                                    <tbody>
                                        <tr>
                                            <td>
<!-- Nom salarié -->
                                                <span style="font-weight: 600;font-size:18px">
                                                    ${NomPrenom}
                                                </span><br>
<!-- Poste salarié -->
                                                <span style="font-style:normal;font-weight:normal;font-size:14px;">
                                                    ${Poste}
                                                </span><br>
                                                <p style="margin-top:5px;">
<!-- Mail salarié -->
                                                    <span style="color: black!important; text-decoration: underline; font-weight: 600;font-size:14px">
                                                        ${Email}
                                                    </span><br>
<!-- Tel salarié -->
                                                    <a href="tel:${Téléphone}" style="color: black; text-decoration: none; font-weight: 600;font-size:14px">
                                                        ${Téléphone}
                                                    </a>
                                                </p>
<!-- Encart entreprise -->
                                                    <img src="https://zupimages.net/up/23/01/kquk.gif" alt="Semafor" height="40">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
<!-- Bannière1 -->
        <tr>
            <td><img src="${Bannière1}" alt="Photo" width="300%"><br></td>
        </tr>
        ${bannersHtml} <!-- Ajout des bannières conditionnelles -->
    </tbody>
</table></body>
</html>`
},
      "All Inclusive": {
        html: `<html>
    <head></head><body><table cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;" emb-background-style="" width="400" direction="ltr">
    <tbody>
        <tr>
            <td style="width:140px">
                <center>
                <table cellspacing="0" cellpadding="0" border="0" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="vertical-align:top;font-family:Poppins,Arial, Helvetica, sans-serif; font-size:16px">
<!-- Colonne de gauche -->
                                <table style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <center>
<!-- Photo salarié -->
                                                   <p>All</p> <img src="${Photo}" alt="Photo" width="100"><br>
                                                </center>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <center>
<!-- Lien LinkedIn + site web -->
                                                    <p style="margin:10px auto 0;">
                                                        <a href="https://www.linkedin.com/company/semafor/?originalSubdomain=fr"><img src="https://zupimages.net/up/23/01/4jph.png" alt="Semafor" height="25"></a>
                                                        <a href="https://www.semafor.fr/"><img src="https://zupimages.net/up/23/01/0vzm.png" alt="Semafor" height="25"></a>
                                                    </p>
                                                </center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
            </td>
            <td style="width:290px">
                <table cellspacing="0" cellpadding="0" border="0" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="vertical-align:top;font-family:Poppins,Arial, Helvetica, sans-serif; font-size:16px">
<!-- Colonne de droite -->
                                <table style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr" emb-background-style="">
                                    <tbody>
                                        <tr>
                                            <td>
<!-- Nom salarié -->
                                                <span style="font-weight: 600;font-size:18px">
                                                    ${NomPrenom}
                                                </span><br>
<!-- Poste salarié -->
                                                <span style="font-style:normal;font-weight:normal;font-size:14px;">
                                                    ${Poste}
                                                </span><br>
                                                <p style="margin-top:5px;">
<!-- Mail salarié -->
                                                    <span style="color: black!important; text-decoration: underline; font-weight: 600;font-size:14px">
                                                        ${Email}
                                                    </span><br>
<!-- Tel salarié -->
                                                    <a href="tel:${Téléphone}" style="color: black; text-decoration: none; font-weight: 600;font-size:14px">
                                                        ${Téléphone}
                                                    </a>
                                                </p>
<!-- Encart entreprise -->
                                                    <img src="https://zupimages.net/up/23/01/kquk.gif" alt="Semafor" height="40">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
<!-- Bannière1 -->
        <tr>
            <td><img src="${Bannière1}" alt="Photo" width="300%"><br></td>
        </tr>
        ${bannersHtml} <!-- Ajout des bannières conditionnelles -->
    </tbody>
</table></body>
</html>`
},
      Groupe: {
        html: `<html>
    <head></head><body><table cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;" emb-background-style="" width="400" direction="ltr">
    <tbody>
        <tr>
            <td style="width:140px">
                <center>
                <table cellspacing="0" cellpadding="0" border="0" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="vertical-align:top;font-family:Poppins,Arial, Helvetica, sans-serif; font-size:16px">
<!-- Colonne de gauche -->
                                <table style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <center>
<!-- Photo salarié -->
                                                   <p>Groupe</p> <img src="${Photo}" alt="Photo" width="100"><br>
                                                </center>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <center>
<!-- Lien LinkedIn + site web -->
                                                    <p style="margin:10px auto 0;">
                                                        <a href="https://www.linkedin.com/company/semafor/?originalSubdomain=fr"><img src="https://zupimages.net/up/23/01/4jph.png" alt="Semafor" height="25"></a>
                                                        <a href="https://www.semafor.fr/"><img src="https://zupimages.net/up/23/01/0vzm.png" alt="Semafor" height="25"></a>
                                                    </p>
                                                </center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
            </td>
            <td style="width:290px">
                <table cellspacing="0" cellpadding="0" border="0" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="vertical-align:top;font-family:Poppins,Arial, Helvetica, sans-serif; font-size:16px">
<!-- Colonne de droite -->
                                <table style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr" emb-background-style="">
                                    <tbody>
                                        <tr>
                                            <td>
<!-- Nom salarié -->
                                                <span style="font-weight: 600;font-size:18px">
                                                    ${NomPrenom}
                                                </span><br>
<!-- Poste salarié -->
                                                <span style="font-style:normal;font-weight:normal;font-size:14px;">
                                                    ${Poste}
                                                </span><br>
                                                <p style="margin-top:5px;">
<!-- Mail salarié -->
                                                    <span style="color: black!important; text-decoration: underline; font-weight: 600;font-size:14px">
                                                        ${Email}
                                                    </span><br>
<!-- Tel salarié -->
                                                    <a href="tel:${Téléphone}" style="color: black; text-decoration: none; font-weight: 600;font-size:14px">
                                                        ${Téléphone}
                                                    </a>
                                                </p>
<!-- Encart entreprise -->
                                                    <img src="https://zupimages.net/up/23/01/kquk.gif" alt="Semafor" height="40">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
<!-- Bannière1 -->
        <tr>
            <td><img src="${Bannière1}" alt="Photo" width="300%"><br></td>
        </tr>
        ${bannersHtml} <!-- Ajout des bannières conditionnelles -->
    </tbody>
</table></body>
</html>`
},
    };

    const { html } = companyInfo[selectedCompany];

    if (!NomPrenom || !Poste || !Email || !Téléphone || !Photo || !Bannière1) {
      setError(
        "Tous les champs doivent être complétés pour générer la signature."
      );
      setSaveButtonVisible(false);
    } else {
      setError("");
      setSaveButtonVisible(true);
      setSignature(html);
    }
  };

  return (
    <div className="bodyform">
      <h2>Signature Generator</h2>
      <div className="formulaire">
        <input
          type="text"
          placeholder="Nom Prenom"
          value={NomPrenom}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Poste"
          value={Poste}
          onChange={(e) => setPoste(e.target.value)}
        />
        <input
          type="mail"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="phone"
          placeholder="Téléphone"
          value={Téléphone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <input
          type="url"
          placeholder="Photo"
          value={Photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="url"
          placeholder="Bannière1"
          value={Bannière1}
          onChange={(e) => setBanniere1(e.target.value)}
        />
        <input
          type="url"
          placeholder="Bannière2"
          value={Bannière2}
          onChange={(e) => setBanniere2(e.target.value)}
        />
        <input
          type="url"
          placeholder="Bannière3"
          value={Bannière3}
          onChange={(e) => setBanniere3(e.target.value)}
        />

        <div>
          <h3>Sélectionnez l'entreprise</h3>
          {["Semafor", "E2I", "All Inclusive", "Groupe"].map((company) => (
            <label key={company}>
            {company}
              <input type="radio" name="company" value={company} checked={selectedCompany === company} onChange={(e) => setSelectedCompany(e.target.value)}
              />

            </label>
          ))}
        </div>
      </div>
      <div className="buttonbloc">
        <button onClick={generateSignature}>Generate</button>
        {isSaveButtonVisible && (
          <button className="SaveButton" onClick={downloadSignature}>
            Sauvegarder
          </button>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}
        <div dangerouslySetInnerHTML={{ __html: signature }} />
      </div>
    </div>
  );
};

export default SignatureGenerator;
