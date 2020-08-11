const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // inserir dados
    
    proffyValue = {
        name: 'Laylia Dhenyfer',
        avatar: 'https://avatars3.githubusercontent.com/u/64993364?s=460&u=7d52b390e416bb4dffdf8166f5c1122f63988ab8&v=4',
        whatsapp: '82982893041',
        bio: 'Professora de Ingles'
    }
    
    classValue = {
        subject: 1,
        cost: '20'
        // o proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        //class_id vira pelo bancos de dados, apos cadrastar a aula/class
       {
          weekday: 1,
          time_from: 720,
          time_to: 1220
       },
       {
          weekday: 0,
          time_from: 520,
          time_to: 1220
       }
    ]
    
   //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consultar as classes de um determinado professor 
    // e trazer juntos os dados dele
    const selectClassesAnProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAnProffys)

    // o horario que a pessoa trabalha, por exemplo, e das 8h - 18h //* =tudo
    // o time_from e 8h precisa ser menor ou igual ao horario solicitado 
    // o time_to precisa ser acima de 8 e menor q 18
    const selectClassesSchedules = await db.all(`
       SELECT class_schedule.*
       FROM class_schedule
       WHERE class_schedule.class_id = 1
       AND class_schedule.weekday = "0"
       AND class_schedule.time_from <= "520"
       AND class_schedule.time_to > "520"
    `)
    //console.log(selectClassesSchedules)
})