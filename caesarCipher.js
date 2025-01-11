
const uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function caesarCipher(word, num){
    
    let result = ""
    for(const letter of word){
        
        if(/[A-Z]/.test(letter)){
            console.log(letter + " uppercase")
            let start = letter.charCodeAt() - 65;
            result += uppercaseAlphabet[(start + num)%26];            
        }
        else if(/[a-z]/.test(letter)){   
            let start = letter.charCodeAt() - 97;
            result += lowercaseAlphabet[(start + num)%26];
            
        }
        else{
            result += letter;
        } 

    }
    return result
}

export {caesarCipher};

