
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 1
function z1() {
    let min;
    let minElem;

    let a = parseInt(prompt("введите число a:"));
    let b = parseInt(prompt("введите число b:"));
    let c = parseInt(prompt("введите число c:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("введите числа");
        return;
    }

    if (a <= b && a <= c) {
        min = a;
        minElem = "a";
    } else if (b <= a && b <= c) {
        min = b;
        minElem = "b";
    } else {
        min = c;
        minElem = "c";
    }

    const result = document.querySelector("#result");
    result.innerHTML = `
        <p>введены значения:</p>
        <p>a=${a}</p>
        <p>b=${b}</p>
        <p>c=${c}</p>
        <p>Наименьшее число: ${minElem}=${min}</p>
    `;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 2
function z2() {
    const res = document.querySelector("#result");

    res.innerHTML = `
        <p>введите координаты вершин:</p>
        <div>A: <input type="number" id="x1" value="0"> <input type="number" id="y1" value="0"></div>
        <div>B: <input type="number" id="x2" value="0"> <input type="number" id="y2" value="3"></div>
        <div>C: <input type="number" id="x3" value="4"> <input type="number" id="y3" value="0"></div>
        <button onclick="triangle()">рассчитать</button>
        <div id="z2-res"></div>
    `;
}

function sidelength(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
function perimetr(a, b, c) {
    return a + b + c;
}
function ploshad(p, a, b, c) {
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
function triangle() {
    let x1 = parseFloat(document.getElementById('x1').value);
    let y1 = parseFloat(document.getElementById('y1').value);
    let x2 = parseFloat(document.getElementById('x2').value);
    let y2 = parseFloat(document.getElementById('y2').value);
    let x3 = parseFloat(document.getElementById('x3').value);
    let y3 = parseFloat(document.getElementById('y3').value);

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(x3) || isNaN(y3)) {
        alert("введите все координаты");
        return;
    }

    let a = sidelength(x1, y1, x2, y2);
    let b = sidelength(x2, y2, x3, y3);
    let c = sidelength(x3, y3, x1, y1);

    let P = perimetr(a, b, c);
    let p = P / 2; //полупериметр

    let S = ploshad(p, a, b, c);

    const result = document.getElementById('z2-res');
    result.innerHTML = `
        <p>стороны: a=${a.toFixed(2)}, b=${b.toFixed(2)}, c=${c.toFixed(2)}</p>
        <p><b>периметр:</b> ${P.toFixed(2)}</p>
        <p><b>площадь:</b> ${S.toFixed(2)}</p>
    `;
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 3
function z3() {
    const res = document.querySelector("#result");

    res.innerHTML = `
        <p>введите переменные для расчетов:</p>
        <div>a: <input type="number" id="input_a" value=""> b: <input type="number" id="input_b" value=""></div>
        <div>c: <input type="number" id="input_c" value=""> d: <input type="number" id="input_d" value=""></div>
        <div>x: <input type="number" id="input_x" value=""> y: <input type="number" id="input_y" value=""></div>
        <button onclick="calculateall()">рассчитать все</button>
        <div id="z3-res"></div>
    `;
}

function f1(a, b, c) {
    return ((b + Math.sqrt(Math.pow(b, 2) + 4 * a * c)) / (2 * a) - Math.pow(a,3) * c + Math.pow(b,-2));
}

function f2(a, b, c, d) {
    return ((a/c) * (b/d)) - ((a*b - c)/(c*d))
}

function f3(x, y) {
    return ((Math.sin(x) + Math.cos(y)) / (Math.cos(x) - Math.sin(y))) * Math.tan(x * y);
}

function f4(x, y) {
    return (x + y) / (y + 1) - (x * y - 12) / (34 + x);
}

function calculateall() {
    let a = parseFloat(document.getElementById('input_a').value);
    let b = parseFloat(document.getElementById('input_b').value);
    let c = parseFloat(document.getElementById('input_c').value);
    let d = parseFloat(document.getElementById('input_d').value);
    let x = parseFloat(document.getElementById('input_x').value);
    let y = parseFloat(document.getElementById('input_y').value);

    if ((isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(x) || isNaN(y))) {
        alert("заполните все поля");
        return;
    }

    let res1 = f1(a, b, c);
    let res2 = f2(a, b, c, d);
    let res3 = f3(x, y);
    let res4 = f4(x, y);

    const result = document.getElementById('z3-res');
    result.innerHTML = `
        <p>результат по формуле 1: ${res1.toFixed(4)}</p>
        <p>результат по формуле 2: ${res2.toFixed(4)}</p>
        <p>результат по формуле 3: ${res3.toFixed(4)}</p>
        <p>результат по формуле 4: ${res4.toFixed(4)}</p>
    `;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 4


//арбуз облако весло забор тигр книга маяк песок искра шторм рюкзак компас лампа ключ трава мост небо экран шарф эхо
function format(word) {
    glas = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";

    if (glas.includes(word.charAt(0))) {
        return `<b>${word}</b>`;
    }
    else {
        return word
    }

}

function z4() {
    let input = prompt("введите 20 слов через пробел:");

    if (!input) {
        alert("вы ничего не ввели");
        return;
    }

    //из строки в массив
    let words = input.trim().split(/\s+/);

    //
    let original = words.map(format);

    let reverse = [...words].reverse().map(format);

    let sorted = [...words].sort().map(format);

    //фильтрация только на согласные 
    glas = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";
    let sogl = words.filter(function (word) {
        return !glas.includes(word.charAt(0));
    });

    const result = document.querySelector("#result");

    result.innerHTML = `
        <p>исходный список: ${original.join(", ")}</p>
        <p>в обратном порядке: ${reverse.join(", ")}</p>
        <p>отсортированный: ${sorted.join(", ")}</p>
        <p>слова на согласные: ${sogl.join(", ")}</p>
    `;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 5

function sklonenie(name) {
    let lastbukva = name.slice(-1);
    let wordminuslast = name.slice(0, -1);

    if (!name || name === "-") return "";

    if ("бвгджзйклмнпрстфхцчшщ".includes(lastbukva.toLowerCase())) return name + "а";

    if (lastbukva.toLowerCase() === "а") {
        return wordminuslast + "ы";
    }

    if (lastbukva.toLowerCase() === "я") {
        return wordminuslast + "и";
    }
    else {
        return name;
    }
}

function z5() {
    const res = document.querySelector("#result");

    let questions = [
        "как вас зовут?",
        "ваша фамилия?",
        "в каком году вы родились? (гггг)",
        "ваш любимый цвет?",
        "ваше хобби?",
        "в каком городе вы живете?",
        "ваше любимое блюдо?",
        "ваш любимый фильм?",
        "кем вы работаете/учитесь?",
        "ваш любимый напиток?"
    ];

    let answers = [];

    for (let i = 0; i < questions.length; i++) {
        let res_prompt = prompt(questions[i]);
        if (res_prompt) {
            answers.push(res_prompt);
        } else {
            answers.push("-");
        }

    }

    let imya = answers[0];
    let fam = answers[1];
    let fio_skl = sklonenie(fam) + " " + sklonenie(imya);

    //вычисление возраста
    let nowtime = new Date().getFullYear();
    let year = parseInt(answers[2]);

    let age;
    if (!isNaN(year) && year !== null) {
        age = nowtime - year;
    } else {
        age = "не указан";
    }



    let table = `<h3>Анкета ${fio_skl}</h3>`;
    table += `<table border="1" style="border-collapse: collapse; width: 100%;">
                <tr>
                    <th style="padding: 8px;">Вопрос</th>
                    <th style="padding: 8px;">Ответ</th>
                </tr>`;

    for (let i = 0; i < questions.length; i++) {
        table += `
            <tr>
                <td style="padding: 8px;">${questions[i]}</td>
                <td style="padding: 8px;">${answers[i]}</td>
            </tr>`;
    }

    table += `
            <tr style="font-weight: bold;">
                <td style="padding: 8px;">Рассчитанный возраст</td>
                <td style="padding: 8px;">${age}</td>
            </tr>
        </table>`;

    res.innerHTML = table;
}
