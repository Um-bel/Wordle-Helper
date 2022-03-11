function main(words, args, alph) {
    const unknowns = args.unknowns; 
    const knowns = args.knowns; 
    const notUsed = args.notUsed; 
    
    function checker(value) {
        var prohibited = notUsed; 
      
        for (var i = 0; i < prohibited.length; i++) {
          if (value.indexOf(prohibited[i]) > -1) {
            return false;
          }
        }
        return true;
    }

    let words_val = words.filter(checker); 
    let cannidates = []; 
    for(let i = 0; i < words_val.length; i++) {
        let cannidate = words_val[i].split(""); 
        let check = 0; 
        for(let l = 0; l < knowns.length; l++) {
            if(cannidate[knowns[l][1]] !== knowns[l][0]) {
                break; 
            } else {
                check++; 
            }
        }

        if(check == knowns.length) {
            cannidates.push(cannidate.join("")); 
        }
    }
    if(cannidates.length <= 0) {
        return []; 
    }

    let approved = []; 
    let data = []
    for(let i = 0; i < cannidates.length; i++) {
        let check = 0; 
        for(let l = 0; l < unknowns.length; l++) {
            if(cannidates[i].indexOf(unknowns[l][0]) === unknowns[l][1]) { 
                //if the index that the char is found is the same as the origonal index, don't approve it
                break; 
            } else if(cannidates[i].includes(unknowns[l][0]) 
                    && cannidates[i].indexOf(unknowns[l][0]) !== unknowns[l][1]) {
                        //if the index that the char is found ISN'T the same as the origonal index, increment the check
                            check++; 
            } else {
                continue; 
            }
        }

        //if it has ALL of the unknown string, none of them at their orignall index found, approve them
        if(check === unknowns.length) {
            approved.push(cannidates[i]); 
            data.push({WORD: cannidates[i].split(""), VAL: 0})
        } else {
            continue; 
        }
    }

    const maxestamt = 64735; 
    for(let i = 0; i < data.length; i++) {
        for(let l = 0; l < data[i].WORD.length; l++) {
            for(let j = 0; j < alph.length; j++) {
                if(data[i].WORD[l] == alph[j].CHAR) {
                    data[i].VAL += alph[j].VAL
                }
            }
        }
    }

    let maxamt = 0; 
    let bigestamt = {WORD: "", VAL: 0}; 
    for(let i = 0; i < data.length; i++) {
        maxamt += data[i].VAL; 
        if(data[i].VAL > bigestamt.VAL) {
            bigestamt = data[i]; 
        } else {
            continue; 
        }
    }

    console.log("Most probable word: ", Math.round((100*bigestamt.VAL)/maxamt) + "% chance at " + bigestamt.WORD.join(""));
    //sorts through all of the current cannidates for words, and checks if they contain the unknown words; if so, approve them
    return approved; 
}

const words = require("./words/words.json").concat(require("./words/otherWords.json")); 
const args = require('./args'); 
const alph = require("./words/alph.json"); 

console.log("all possible words: ", main(words, args, alph));