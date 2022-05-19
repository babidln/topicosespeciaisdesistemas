const objs = [
   {
    "nome":"Mateus",
    "idade":8,
    "atividade-extra": true,
    "ativ-extra": ["Judo","Natação"],
    "disciplina": ["Portugues","Matemática","História","Geogradia"]
    },
     {
    "nome":"João",
    "idade":7,
    "atividade-extra": false,
    "ativ-extra": [null],
    "disciplina": ["Portugues","Matemática","Inglês"]
   },
    ]
    console.log (objs);
    console.log (typeof objs);

    const objData = JSON.stringify(objs);
    
    console.log (jsonData)
    console.log (typeof jsonData);

    const objjson = JSON.parse(jsonData);

    console.log(objjson);
    console.log(typeof objjson);

    objjson.map((aluno) =>
    {
        console.log (aluno.nome)

        console.log (aluno.email)

        console.log (aluno.idade)
    })
