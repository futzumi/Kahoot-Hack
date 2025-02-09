javascript: if (!document.querySelector("#zumimenu") && location.href.includes("https://kahoot.it/")) {
    let zumimenu = document.createElement("div");
    zumimenu.id = "zumimenu", zumimenu.style = `position: absolute; top: 0px; 
left: 0px; width: 100%; height: 100%; margin: 0px; display: flex;
            flex-direction: column;
            z-index: 1000; /* Ensure it's on top */
            pointer-events: none;
            user-select: none;
            `;
    let zumiheader = `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kahoot_Logo.svg/1280px-Kahoot_Logo.svg.png`;
    zumimenu.innerHTML = `  <div style="pointer-events: auto;width: 40%; height: 60%; background: #25292e; position: relative; top: 0; left: 0; margin: 15px; display: block;">
        <div style="position: absolute; top: 0px; left: 0px; display: flex; text-align: center; justify-content: center; align-items: center;">
            <img style="height: 100%; width: 40%;" src="${"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kahoot_Logo.svg/1280px-Kahoot_Logo.svg.png"}">
            <span class="zumi-close" style="position: absolute; top: 0; right: 15px; color: ghostwhite; margin: 25px; cursor: pointer;">X</span>
        </div>
        <div class="zumi-options" style="position:absolute; top: 10%; left: 0px; width: 100%; height: 90%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <span style="color: #441090; font-size: 15px; margin-bottom: 10px;">
                Look at your teacher's URL bar and copy the game ID.<br>
                Ex. https://play.kahoot.it/v2/lobby?quizId=[COPY CODE HERE]
            </span>
            <input id="zumi-launch_inp" style="width: 80%; height: 50px; margin-top: 10px; background: transparent; border: 2px solid ghostwhite; font-size: 18px; outline:none; color: ghostwhite; text-align: center;" value="">
       <button id="launch-zumi" style="margin-top: 10px; padding: 10px 20px; background-color: #441090; color: white; border: none; border-radius: 5px; cursor: pointer;">
                LAUNCH
            </button>
              <span style="color:rgb(105, 105, 105); font-size: 15px; margin-top:30px;">
               Press K to kill the menu/hacks<br>
               Press T to toggle the menu
            </span>
            </div>
    </div>`, document.body.appendChild(zumimenu), document.querySelector(".zumi-close").addEventListener("click", function() {
        document.querySelector("#zumimenu").remove()
    }), document.querySelector("#launch-zumi").addEventListener("click", function() {
        const kahoot = {};
        var quizID = document.querySelector("#zumi-launch_inp").value;
        kahoot.getQuestionData = function(script) {
            fetch("https://kahoot.it/rest/kahoots/" + quizID, {
                headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "cache-control": "no-cache",
                    pragma: "no-cache",
                    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                referrer: "https://kahoot.it/",
                referrerPolicy: "strict-origin-when-cross-origin",
                body: null,
                method: "GET",
                mode: "cors",
                credentials: "include"
            }).then(response => (response.ok || (alert("An error occured. Make sure you followed the instructions correctly and typed the quiz ID correctly.\nIf problems continue, create an issue on my github.\nhttps://github.com/futzumi/Kahoot-Hack"), document.querySelector("#zumimenu").remove()), response.json())).then(data => {
                eval(script)
            }).catch(error => {
                alert("An error occured. Make sure you followed the instructions correctly and typed the quiz ID correctly.\nIf problems continue, create an issue on my github.\nhttps://github.com/futzumi/Kahoot-Hack"), document.querySelector("#zumimenu").remove()
            })
        }, document.querySelector(".zumi-options").innerHTML = `<style>  .toggle-container {
            display: flex;
            align-items: center;
            margin: 10px 0;
        }

        .toggle {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            margin-left: 20px;
        }

        .toggle input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color:rgb(64, 70, 78);
            transition: .4s;
            border-radius: 34px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: #441090;
        }

        input:checked + .slider:before {
            transform: translateX(26px);
        }</style>
    <div style="color:ghostwhite; font-size: 24px; margin-right: 20px; justify-content: center; text-align: center; align-items: center; display: flex">Rounded Answers <label class="toggle">
            <input id="roundAnswersToggle" type="checkbox">
            <span class="slider"></span>
        </label>
        </div>
         <span style="color:rgb(105, 105, 105); font-size: 15px; margin-top:30px;">
               Press K to kill the menu/hacks<br>
               Press T to toggle the menu
            </span>`, setInterval(function() {
            try {
                kahoot.roundAnswers = !!document.querySelector("#roundAnswersToggle").checked
            } catch (e) {}
        }), kahoot.getQuestionData(`setInterval(function() {
                    try {
                      var questionData = response.questions;
                      var currentProblem = JSON.parse(localStorage.getItem("kahoot-game_session")).questionNumber;
                      var questionChoices = questionData[currentProblem].choices;
                      var correctAnswer;
                     if (questionChoices.length >= 2 && questionChoices.length <= 4) {
    for (let i = 0; i < questionChoices.length; i++) {
        if (questionChoices[i].correct) {
            correctAnswer = questionChoices[i];
            break; // Exit the loop once the correct answer is found
        }
    }
}
    
                     if (kahoot.roundAnswers) {
                      document.querySelector('[data-functional-selector="answer-' + questionChoices.indexOf(correctAnswer) + '"]').style.borderRadius = '30px';
                   }
               
          } catch (a) {
                     }
                  })`)
    })
} document.addEventListener("keydown", function(event) {
    ("t" === event.key || "T" === event.key) && ("hidden" === document.querySelector("#zumimenu").style.visibility ? document.querySelector("#zumimenu").style.visibility = "visible" : document.querySelector("#zumimenu").style.visibility = "hidden")
}), document.addEventListener("keydown", function(event) {
    ("k" === event.key || "K" === event.key) && (document.querySelector("#zumimenu").remove(), kahoot.roundAnswers = !1)
});
