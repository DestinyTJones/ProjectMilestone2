function submitQuiz() {
    let score = 0;
    let total = 5;
    let output = "";

    const answers = {
        q1: "interactivity",
        q2: "HTML",
        q3: "//",
        q4: "Both",
        q5: ["React", "Angular"]
    };

    let q1 = document.getElementById("q1").value.toLowerCase();

    if (q1 === answers.q1) {
        score++;
        output += "<p style='color:green;'>Q1 Correct</p>";
    } else {
        output += "<p style='color:red;'>Q1 Wrong. Answer: interactivity</p>";
    }

    ["q2","q3","q4"].forEach(q => {
        let selected = document.querySelector(`input[name=${q}]:checked`);

        if (selected && selected.value === answers[q]) {
            score++;
            output += `<p style='color:green;'>${q.toUpperCase()} Correct</p>`;
        } else {
            output += `<p style='color:red;'>${q.toUpperCase()} Wrong. Answer: ${answers[q]}</p>`;
        }
    });

    let selectedQ5 = [...document.querySelectorAll("input[name=q5]:checked")]
        .map(el => el.value);

    if (JSON.stringify(selectedQ5.sort()) === JSON.stringify(answers.q5.sort())) {
        score++;
        output += "<p style='color:green;'>Q5 Correct</p>";
    } else {
        output += "<p style='color:red;'>Q5 Wrong. Answer: React, Angular</p>";
    }

    let resultText = score >= 3 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        <h2>${resultText}</h2>
        <p>Total Score: ${score}/${total}</p>
        ${output}
    `;
}

function resetQuiz() {
    document.getElementById("result").innerHTML = "";
}
