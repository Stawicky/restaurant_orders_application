

// Clear and change input when U click
const inputs = document.querySelectorAll('.form input');

inputs.forEach( input => {
    input.addEventListener("focus", changeInput );
})
function changeInput() {
    this.value =""
    this.type ="number"
    this.classList.add("inputActive");
}

// Show helpbar
const helpButton = document.querySelector('.helpbutton');
const helpBar = document.querySelector('.helpbar');
const closeIcon = document.querySelectorAll('.helpbutton div');
const bulbIcon = document.querySelector('.bulbIcon');
const container = document.querySelector('.container');
const list = document.querySelector(".list");

helpButton.addEventListener('click', ()=> {
    //slide bar
    helpBar.classList.toggle("activeHelpBar");
    // change icon
    bulbIcon.classList.toggle("iconactive");
    closeIcon.forEach( line => {
    line.classList.toggle("iconactive");
    });
    //blur container
    container.classList.toggle("blur");
    list.classList.toggle("blur");
}, false);


// Create List
const submitButton = document.querySelector(".submit-button");
const listcontent = document.querySelector(".listcontent")
submitButton.addEventListener ("click", creatList);

const formcontent = [

                    //nazwa , id , stan magazynowy, miara / zaokrąglenie

                    //beer
                     "Kozel jasny: ", "#kozel_jasny" , 20 , " kegów", 1,
                     "Kozel ciemny: ", "#kozel_ciemny" , 10 , " kegów", 1,
                     "Pilsner: ", "#pilsner" , 10 , " kegów", 1,
                     "Paulaner: ", "#paulaner" , 10 , " kegów", 1,
                     "Grimbergen Blonde: ", "#grimbergen_blonde" , 5 , " kegów", 1,
                     "Grimbergen Blanche: ", "#grimbergen_blanche" , 5 , " kegów", 1,
                     "Grimbergen Rouge: ", "#grimbergen_rouge" , 5 , " kegów", 1,
                     "Blanc 1664: ", "#blanc" , 5 , " kegów", 1,
                     "Cydr Lubelski: ", "#cydr" , 5 , " kegów", 1,
                     "Frizzante: ", "#frizzante" , 5 , " kegów", 1,
                    //pepsi-company & soft
                     "Pepsi: ", "#pepsi" , 20 , " krat", 1,
                     "Pepsi Max: ", "#pepsi_max" , 10 , " krat", 1,
                     "Mirinda: ", "#mirinda" , 5 , " krat", 1,
                     "Schweppes: ", "#schweppes" , 5 , " krat", 1,
                     "7up: ", "#seven_up" , 20 , " krat", 1,
                     "Lipton lemon: ", "#lipton_lemon" , 5 , " krat", 1,
                     "Lipton peach: ", "#lipton_peach" , 5 , " krat", 1,
                     "Woda gaz: ", "#woda_gaz" , 20 , " zgrzewek", 1,
                     "Woda nie gaz: ", "#woda_ngaz" , 20 , " zgrzewek", 1,
                     "Sok pomidor: ", "#sok_pomidor" , 2 , " krat", 1,
                     "Sok pomarańcz: ", "#sok_pomarancz" , 12 , " litrów", 6,
                     "Sok jabłko: ", "#sok_jablko" , 12 , " litrów", 6,
                     "Sok grejpfrut: ", "#sok_grejpfrut" , 12 , " litrów", 6,
                     "Sok banan: ", "#sok_banan" , 12 , " litrów", 6,
                     "Sok ananas: ", "#sok_ananas" , 12 , " litrów", 6,
                     "Sok czarna porzeczka: ", "#sok_porzeczka" , 12 , " litrów", 6,
                     "Pepsi PET: ", "#pepsi_pet" , 30 , " butelek", 15,
                     "7up PET: ", "#seven_up_pet" , 30 , " butelek", 15,
                     "Lech Free Lager: ", "#lech_lager" , 12 , " sześciopaków", 1,
                     "Lech Free Lime: ", "#lech_lime" , 12 , " sześciopaków", 1,
                     "Redbull: ", "#redbull" , 30 , " puszek", 12,
                     //high-proof alcohole
                     "Jack Daniel's No.7 : ", "#jd" , 45 , " ", 12,
                     "Jack Daniel's Fire : ", "#jd_fire" , 12 , " ", 6,
                     "Jack Daniel's Honey : ", "#jd_honey" , 12 , " ", 6,
                     "Jack Daniel's Rye : ", "#jd_rye" , 18 , " ", 6,
                     "Jack Daniel's Gentlemen : ", "#jd_gentlemen" , 12 , " ", 1,
                     "Woodford Reserve: ", "#woodford" , 12 , " ", 1,
                     "Triple Sec: ", "#triple_sec" , 18 , " ", 6,
                     "Campari:  ", "#campari" , 12 , " ", 1,
                     "Martini Rosso: ", "#martini_rosso" , 6 , " ", 1,
                     "Angostura Reserva: ", "#angostura_reserva" , 12 , " ", 1,
                     "Angostura 7 YO: ", "#angostura_seven" , 12 , " ", 1,
                     "Aperol: ", "#aperol" , 24 , " ", 6,
                     "Finlandia: ", "#finlandia" , 48 , " ", 12,
                     "Baczewski czysty: ", "#baczewski" , 36 , " ", 6,
                     "Beefeater: ", "#beefeater" , 12 , " ", 1,
                     "El Jimador blanco: ", "#el_jimador_blanco" , 12 , " ", 1,
                     "El Jimador reposado: ", "#el_jimador_reposado" , 12 , " ", 1,
                     "Portobello: ", "#portobello" , 12 , " ", 1,
                     "Jameson: ", "#jameson" , 12 , " ", 1,
                     //coffee
                     "Kawa: ", "#kawa" , 12 , " kg ", 1,



 
                  

                    ];


                

function creatList() {

    // get date
    const date = new Date();
    let month = ((date.getMonth()+1) < 10 ) ? ("0" + (date.getMonth()+1)) : (date.getMonth()+1);
    document.querySelector(".datenow").innerHTML = `Zamówienie: ${date.getDate()}-${month}-${date.getUTCFullYear()}`;
    
    
    let listtext= "";

    // Odczyt wartości
    for (i=0; i < (formcontent.length/5); i++){
        

        if ( (document.querySelector(formcontent[i*5+1]).type) == "number" && (document.querySelector(formcontent[i*5+1]).value) != "" && (formcontent[i*5+2] - (document.querySelector(formcontent[i*5+1]).value)) > 0  ) {
         
            let roundedAmount;
            let remainder = (formcontent[i*5+2] - (document.querySelector(formcontent[i*5+1]).value)) % formcontent[i*5+4];
                if (remainder == 0) {
                     roundedAmount = (formcontent[i*5+2] - (document.querySelector(formcontent[i*5+1]).value))
                    }
                else {
                     roundedAmount = (formcontent[i*5+2] - (document.querySelector(formcontent[i*5+1]).value)) - remainder + formcontent[i*5+4]
                    }

            listtext = listtext + formcontent[i*5] + (roundedAmount) + formcontent[i*5+3] + "<br/>";
        }
        else {
            }
    }
    // 
    if (listtext === "") {
        alert("Nie można wydrukować pustej listy zamówień.");
        return;}
    else {
    list.style.display = "flex";
    }
    listcontent.innerHTML = listtext;
    setTimeout(scrollAtTheEnd, 1);
    
};
 
  // smooth scroll at end of list 
function scrollAtTheEnd () {
    document.querySelector("body").scrollIntoView({ behavior: 'smooth', block: 'end'})
}

 //copy to clipboard 
 const copyButton = document.querySelector(".copyButton");
 copyButton.addEventListener('click', () => {
     copyText(document.querySelector('.listcontent'))
     alert("Skopiowano zamówienie do schowka");
 })

 function copyText(htmlElement) {
     if (!htmlElement) {return;}
     let elementText= htmlElement.innerText;
     let textAreaElement = document.createElement('textarea');
     textAreaElement.innerHTML= elementText;
     document.body.appendChild(textAreaElement);
     textAreaElement.select();
     document.execCommand('copy');
     textAreaElement.parentNode.removeChild(textAreaElement);
 }