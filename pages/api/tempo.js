async function tempo(request, responce){
    const dynamicDate = new Date();

    responce.json({
        date: dynamicDate.toGMTString()
    })
}

export default tempo;