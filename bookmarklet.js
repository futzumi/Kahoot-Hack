js-beautify
(v1.15.2)
Beautify JavaScript, JSON, React.js, HTML, CSS, SCSS, and SASS

Enable Dark Mode

Beautify JavaScript
Beautify Code (ctrl‑enter)

Copy to Clipboard
 
Download
 
Select All
 
Clear
 No file chosen
Options

Indent with 4 spaces

Allow 5 newlines between tokens

Do not wrap lines

Braces with control statement
HTML <style>, <script> formatting:


Add one indent level
   End script and style with newline?
Support e4x/jsx syntax
Use comma-first list style?
Detect packers and obfuscators? (unsafe)
Preserve inline braces/code blocks?
Keep array indentation?
Break lines on chained methods?
Space before conditional: "if(x)" / "if (x)"
Unescape printable chars encoded as \xNN or \uNNNN?
Use JSLint-happy formatting tweaks?
Indent <head> and <body> sections?
Keep indentation on empty lines?
Use a simple textarea for code input? 
Additional Settings (JSON):

{}
Your Selected Options (JSON):

{
  "indent_size": "4",
  "indent_char": " ",
  "max_preserve_newlines": "5",
  "preserve_newlines": true,
  "keep_array_indentation": false,
  "break_chained_methods": false,
  "indent_scripts": "normal",
  "brace_style": "collapse",
  "space_before_conditional": true,
  "unescape_strings": false,
  "jslint_happy": false,
  "end_with_newline": false,
  "wrap_line_length": "0",
  "indent_inner_html": false,
  "comma_first": false,
  "e4x": false,
  "indent_empty_lines": false
}
Created by Einar Lielmanis, maintained and evolved by Liam Newman.

All of the source code is completely free and open, available on GitHub under MIT licence, and we have a command-line version, python library and a node package as well.

We use the wonderful CodeMirror syntax highlighting editor, written by Marijn Haverbeke.

Made with a great help of many contributors. Special thanks to:
Jason Diamond, Patrick Hof, Nochum Sossonko, Andreas Schneider, Dave Vasilevsky, Vital Batmanov, Ron Baldwin, Gabriel Harrison, Chris J. Shull, Mathias Bynens, Vittorio Gambaletta, Stefano Sanfilippo and Daniel Stockman.

1
javascript: if (!document.querySelector("#zumimenu") && location.href.includes("https://kahoot.it/")) {
2
    let zumimenu = document.createElement("div");
3
    zumimenu.id = "zumimenu", zumimenu.style = `position: absolute; top: 0px; 
4
left: 0px; width: 100%; height: 100%; margin: 0px; display: flex;
5
            flex-direction: column;
6
            z-index: 1000; /* Ensure it's on top */
7
            pointer-events: none;
8
            user-select: none;
9
            `;
10
    let zumiheader = `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kahoot_Logo.svg/1280px-Kahoot_Logo.svg.png`;
11
    zumimenu.innerHTML = `  <div style="pointer-events: auto;width: 40%; height: 60%; background: #25292e; position: relative; top: 0; left: 0; margin: 15px; display: block;">
12
        <div style="position: absolute; top: 0px; left: 0px; display: flex; text-align: center; justify-content: center; align-items: center;">
13
            <img style="height: 100%; width: 40%;" src="${"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kahoot_Logo.svg/1280px-Kahoot_Logo.svg.png"}">
14
            <span class="zumi-close" style="position: absolute; top: 0; right: 15px; color: ghostwhite; margin: 25px; cursor: pointer;">X</span>
15
        </div>
16
        <div class="zumi-options" style="position:absolute; top: 10%; left: 0px; width: 100%; height: 90%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
17
            <span style="color: #441090; font-size: 15px; margin-bottom: 10px;">
18
                Look at your teacher's URL bar and copy the game ID.<br>
19
                Ex. https://play.kahoot.it/v2/lobby?quizId=[COPY CODE HERE]
20
            </span>
21
            <input id="zumi-launch_inp" style="width: 80%; height: 50px; margin-top: 10px; background: transparent; border: 2px solid ghostwhite; font-size: 18px; outline:none; color: ghostwhite; text-align: center;" value="">
22
       <button id="launch-zumi" style="margin-top: 10px; padding: 10px 20px; background-color: #441090; color: white; border: none; border-radius: 5px; cursor: pointer;">
23
                LAUNCH
24
            </button>
25
              <span style="color:rgb(105, 105, 105); font-size: 15px; margin-top:30px;">
26
               Press K to kill the menu/hacks<br>
27
               Press T to toggle the menu
28
            </span>
29
            </div>
30
    </div>`, document.body.appendChild(zumimenu), document.querySelector(".zumi-close").addEventListener("click", function() {
31
        document.querySelector("#zumimenu").remove()
32
    }), document.querySelector("#launch-zumi").addEventListener("click", function() {
33
        const kahoot = {};
34
        var quizID = document.querySelector("#zumi-launch_inp").value;
35
        kahoot.getQuestionData = function(script) {
36
            fetch("https://kahoot.it/rest/kahoots/" + quizID, {
37
                headers: {
38
                    accept: "*/*",
39
                    "accept-language": "en-US,en;q=0.9",
40
                    "cache-control": "no-cache",
41
                    pragma: "no-cache",
42
                    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
43
                    "sec-ch-ua-mobile": "?0",
44
                    "sec-ch-ua-platform": "\"Windows\"",
45
                    "sec-fetch-dest": "empty",
46
                    "sec-fetch-mode": "cors",
47
                    "sec-fetch-site": "same-origin"
48
                },
49
                referrer: "https://kahoot.it/",
50
                referrerPolicy: "strict-origin-when-cross-origin",
51
                body: null,
52
                method: "GET",
53
                mode: "cors",
54
                credentials: "include"
55
            }).then(response => (response.ok || (alert("An error occured. Make sure you followed the instructions correctly and typed the quiz ID correctly.\nIf problems continue, create an issue on my github.\nhttps://github.com/futzumi/Kahoot-Hack"), document.querySelector("#zumimenu").remove()), response.json())).then(data => {
56
                eval(script)
57
            }).catch(error => {
58
                alert("An error occured. Make sure you followed the instructions correctly and typed the quiz ID correctly.\nIf problems continue, create an issue on my github.\nhttps://github.com/futzumi/Kahoot-Hack"), document.querySelector("#zumimenu").remove()
59
            })
60
        }, document.querySelector(".zumi-options").innerHTML = `<style>  .toggle-container {
61
            display: flex;
62
            align-items: center;
63
            margin: 10px 0;
64
        }
65
​
66
        .toggle {
67
            position: relative;
68
            display: inline-block;
69
            width: 60px;
70
            height: 34px;
71
            margin-left: 20px;
72
        }
73
​
74
        .toggle input {
75
            opacity: 0;
76
            width: 0;
77
            height: 0;
78
        }
79
​
80
        .slider {
81
            position: absolute;
82
            cursor: pointer;
83
            top: 0;
84
            left: 0;
85
            right: 0;
86
            bottom: 0;
87
            background-color:rgb(64, 70, 78);
88
            transition: .4s;
89
            border-radius: 34px;
90
        }
91
​
92
        .slider:before {
93
            position: absolute;
94
            content: "";
95
            height: 26px;
96
            width: 26px;
97
            left: 4px;
98
            bottom: 4px;
99
            background-color: white;
100
            transition: .4s;
101
            border-radius: 50%;
102
        }
103
​
104
        input:checked + .slider {
105
            background-color: #441090;
106
        }
107
​
108
        input:checked + .slider:before {
109
            transform: translateX(26px);
110
        }</style>
111
    <div style="color:ghostwhite; font-size: 24px; margin-right: 20px; justify-content: center; text-align: center; align-items: center; display: flex">Rounded Answers <label class="toggle">
112
            <input id="roundAnswersToggle" type="checkbox">
113
            <span class="slider"></span>
114
        </label>
115
        </div>
116
         <span style="color:rgb(105, 105, 105); font-size: 15px; margin-top:30px;">
117
               Press K to kill the menu/hacks<br>
118
               Press T to toggle the menu
119
            </span>`, setInterval(function() {
120
            try {
121
                kahoot.roundAnswers = !!document.querySelector("#roundAnswersToggle").checked
122
            } catch (e) {}
123
        }), kahoot.getQuestionData(`setInterval(function() {
124
                    try {
125
                      var questionData = response.questions;
126
                      var currentProblem = JSON.parse(localStorage.getItem("kahoot-game_session")).questionNumber;
127
                      var questionChoices = questionData[currentProblem].choices;
128
                      var correctAnswer;
129
                     if (questionChoices.length >= 2 && questionChoices.length <= 4) {
130
    for (let i = 0; i < questionChoices.length; i++) {
131
        if (questionChoices[i].correct) {
132
            correctAnswer = questionChoices[i];
133
            break; // Exit the loop once the correct answer is found
134
        }
135
    }
136
}
137
    
138
                     if (kahoot.roundAnswers) {
139
                      document.querySelector('[data-functional-selector="answer-' + questionChoices.indexOf(correctAnswer) + '"]').style.borderRadius = '30px';
140
                   }
141
               
142
          } catch (a) {
143
                     }
144
                  })`)
145
    })
146
} document.addEventListener("keydown", function(event) {
147
    ("t" === event.key || "T" === event.key) && ("hidden" === document.querySelector("#zumimenu").style.visibility ? document.querySelector("#zumimenu").style.visibility = "visible" : document.querySelector("#zumimenu").style.visibility = "hidden")
148
}), document.addEventListener("keydown", function(event) {
149
    ("k" === event.key || "K" === event.key) && (document.querySelector("#zumimenu").remove(), kahoot.roundAnswers = !1)
150
});
