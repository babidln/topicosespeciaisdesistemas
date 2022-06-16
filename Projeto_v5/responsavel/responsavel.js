const objs =
    [
        {
            "alunos": [
                {
                    "nome": "Gabriel",
                    "sobrenome": "Coelho",
                    "idade": 10,
                    "responsavel": "Keilla",
                    "diciplina": [
                        "Portugues",
                        "Matemática",
                        "História",
                        "Geografia"
                    ],
                    "DiciplinaEx": [
                        "Handeboll",
                        "Jiu-Jitsu"
                    ]
                },
                {
                    "nome": "Barbara",
                    "sobrenome": "Novaes",
                    "idade": 9,
                    "responsavel": "Ricardo",
                    "diciplina": [
                        "Portugues",
                        "Matemática",
                        "História",
                        "Geografia"
                    ],
                    "DiciplinaEx": [
                        null
                    ]
                },
                {
                    "nome": "Antonio",
                    "sobrenome": "Costa",
                    "idade": 10,
                    "responsavel": "Bruno",
                    "diciplina": [
                        "Portugues",
                        "Matemática",
                        "História",
                        "Geografia"
                    ],
                    "DiciplinaEx": [
                        "futebol"
                    ]
                },
                {
                    "nome": "Gabriel",
                    "sobrenome": "Ferreira",
                    "idade": 9,
                    "responsavel": "Paula",
                    "diciplina": [
                        "Portugues",
                        "Matemática",
                        "História",
                        "Geografia"
                    ],
                    "DiciplinaEx": [
                        "futebol"
                    ]
                }
            ],
            "responsaveis": [
                {
                    "nome": "Keilla",
                    "sobrenome": "Coelho",
                    "idade": 30,
                    "responsavelPor": "Gabriel Coelho",
                    "diciplina": [
                        "Portugues",
                        "Matemática",
                        "História",
                        "Geografia"
                    ],
                    "DiciplinaEx": [
                        "Handeboll",
                        "Jiu-Jitsu"
                    ]
                },
                {
                    "nome": "Ricardo",
                    "sobrenome": "Novaes",
                    "idade": 32,
                    "responsavelPor": "Barbara Novaes",
                    "diciplina": [
                        "Portugues",
                        "Matemática",
                        "História",
                        "Geografia"
                    ],
                    "DiciplinaEx": [
                        null
                    ]
                },
                {
                    "nome": "Bruno",
                    "sobrenome": "Costa",
                    "idade": 40,
                    "responsavelPor": "Antonio Costa",
                    "diciplina": [
                        "Portugues",
                        "Matemática",
                        "História",
                        "Geografia"
                    ],
                    "DiciplinaEx": [
                        "futebol"
                    ]
                },
                {
                    "nome": "Gabriel",
                    "sobrenome": "Ferreira",
                    "idade": 39,
                    "responsavelPor": "Gabriel Ferreira",
                    "diciplina": [
                        "Portugues",
                        "Matemática",
                        "História",
                        "Geografia"
                    ],
                    "DiciplinaEx": [
                        "futebol"
                    ]
                }
            ],
            "professores": [
                {
                    "nome": "Emanuel",
                    "sobrenome": "Santos",
                    "diciplinas": [
                        "Portugues",
                        "Matemática"
                    ]
                },
                {
                    "nome": "Violet",
                    "sobrenome": "Evergarden",
                    "diciplinas": [
                        "História",
                        "Geografia"
                    ]
                }
            ],
            "secretaria": {
                "nome": "Judite",
                "sobrenome": "Santos",
                "cargo": "secretaria"
            },
            "finanças": {
                "nome": "Roberto",
                "sobrenome": "Seguro",
                "cargo": "finanças"
            }
        }
    ]



// ----------------calendario----------------
const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outrubro",
        "Novembro",
        "Dezembro",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
//-------------Fim calendario----------------