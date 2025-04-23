import express from 'express'; //express modülünü içe aktarır. Bu modül, HTTP sunucusu oluşturmak için kullanılır

const app = express();//express() fonksiyonu ile bir app nesnesi oluşturuluyor. Bu nesne, gelen istekleri işleyip yanıt verecek olan sunucuyu temsil eder.

app.get('/', (req, res) => {
    res.send('Welcome to the Subscribtion Tracker API!')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})

export default app;