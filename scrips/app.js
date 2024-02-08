// Declaracion de variables
const d = document,
    n = navigator,
    $textContent = d.getElementById('text__content'),
    $copy = d.querySelector('.copy'),
    $encrypt = d.getElementById('encrypt'),
    $decrypt = d.getElementById('decrypt'),
    $h4 = d.querySelector('.message__regExp')
    regex = /[ÁÉÍÓÚÀÈÌÒÙáéíóúàèìòù,.-;:_Ññ+*^¨!"·$%&/()=?¿{}]/gi;

// Valida las vocales del texto ingresado
function checkVowels(vowel){
    if(vowel.toLowerCase() == 'a'){
        vowel = 'ai' 
        return vowel
    }if (vowel.toLowerCase() == 'e') {
        vowel = 'enter'
        return vowel
    }if (vowel.toLowerCase() == 'i') {
        vowel = 'imes'
        return vowel
    }if (vowel.toLowerCase() == 'o') {
        vowel = 'ober'
        return vowel
    }if (vowel.toLowerCase() == 'u') {
        vowel = 'ufat'
        return vowel
    }
}

// Valida las palabras ingresadas
function checkWords(word){
    if(word == 'ai'){
        word = 'a' 
        return word
    }if (word == 'enter') {
        word = 'e'
        return word
    }if (word == 'imes') {
        word = 'i'
        return word
    }if (word == 'ober') {
        word = 'o'
        return word
    }if (word == 'ufat') {
        word = 'u'
        return word
    }
}

$encrypt.addEventListener('click', (e) => {
    e.preventDefault()
    let text = $textContent.value;
    if(text == '' || text == ' '){
        alert('No digtaste ninguna frase para encriptar');
    }else{
        if(text.match(regex)){
            // assignText('h4', `Lo lamento, estás usando caracteres no válidos <strong>${text.match(regex)}</strong>`)
            $h4.innerHTML = `Lo lamento, la frase <strong>${text}</strong> tiene caracteres no permitidos: <strong>${text.match(regex)}</strong>`
            setTimeout(() => {
                $h4.innerHTML = '',
                $textContent.value = ''
            }, 4000);
        }else{
            let message_encrypt = text.replace(/a|e|i|o|u/gi, checkVowels).toLowerCase();
            // console.log(message_encrypt)
    
            assignText('p', `Tú mensaje encriptado es: <strong>${message_encrypt}</strong>`);
            copy(message_encrypt)
        }
    }
});

$decrypt.addEventListener('click', (e) => {
    e.preventDefault()
    let text = $textContent.value;
    if(text == '' || text == ' '){
        alert('No digtaste ninguna frase para desencriptar');
    }else{
        if(text.match(regex)){
            $h4.innerHTML = `Lo lamento, la frase <strong>${text}</strong> tiene caracteres no permitidos: <strong>${text.match(regex)}</strong>`
            setTimeout(() => {
                $h4.innerHTML = '',
                $textContent.value = ''
            }, 4000);
        }else{
            let message_decrypt = text.replace(/ai|enter|imes|ober|ufat/g, checkWords).toLowerCase();
            // console.log(message_decrypt.toLowerCase()) 
    
            assignText('p', `Tú mensajes desencriptado es:<strong> ${message_decrypt}</strong>`);
            copy(message_decrypt)
        }
    }
});

function assignText(element, text) {
    let elementHTML = d.querySelector(element);
    elementHTML.innerHTML = text;
}

function copy(messageTocopy){
    n.clipboard.writeText(messageTocopy);
}

function copyText(){
    $copy.innerHTML = 'Copiado'
    setTimeout(() => {
        $copy.innerHTML = 'Copiar'
        $textContent.value = ''

    }, 2000);
}

$copy.addEventListener('click', copyText);