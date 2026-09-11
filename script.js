/*
 * From html
 */
let text = doucment.getElementById("input").value;
let output = doucment.getElementById("output").value; 


function replace(text, search, replacement) {
    return text.split(search).join(replacement);
}

const map = {
    a: "а",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    e: "е",
    yo: "ё",
    zh: "ж",
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
    f: "ф",
    kh: "х",
    ts: "ц",
    ch: "ч",
    sh: "ш",
    shch: "щ"
};

function transliterate(text) {
    for (let i = 0; i < map.length; i++)
        text = replace(text, map[i][0], map[i][1]);
}
return text;
}

