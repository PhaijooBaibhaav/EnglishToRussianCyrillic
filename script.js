/*
 * From html
 */
let text = document.getElementById("input");
let output = document.getElementById("output"); 

/*
 * Made In js 
*/
const soft = "'";
const hard = '"';

function replace(text, search, replacement) {
    return text.split(search).join(replacement);
}

const map = {


    kh: "х",
    ts: "ц",
    ch: "ч",
    shch: "щ",
    sh: "ш",
    ye: "е", 
    yo: "ё",
    ya: "я", 
    yu: "ю",
    zh: "ж",

    [soft]: "ь",
    [hard]: "ъ",

    a: "а",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    e: "э", 
    z: "з",
    i: "и",
    y: "й",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    f: "ф"
};

function transliterate(text) {
    let keys = Object.keys(map);

    for (let i = 0; i < keys.length; i++) {

        text = replace(text, keys[i], map[keys[i]]);
    }
    return text;
}
input.addEventListener("input", function() {

    output.value = transliterate(input.value);

});

