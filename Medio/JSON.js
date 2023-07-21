const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
    }
]
}`

    const usersObj = JSON.parse(usersText)
    console.log(usersObj)
    console.log(typeof usersObj)
    //? Usando uan función revive en JSON.parse()
    const usersText1 = `{
        "users":[
          {
            "firstName":"Asabeneh",
            "lastName":"Yetayeh",
            "age":250,
            "email":"asab@asb.com"
          },
          {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
          },
          {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
          }
        ]
        }`

        const usersObjt= JSON.parse(usersText1,(key,value)=>{
            let newValue = 
            typeof value=='string' && key !='email' ? value.toUpperCase() : value
            return newValue
        })
        console.log(usersObjt);
    
