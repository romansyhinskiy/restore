export default class BookstoreService {
    data = [
        {
            title: 'Nokia 6300',
            id: 4, author: 'fdsgb',
            price: '42$',
            coverImg: 'https://hotline.ua/img/tx/009/0092225.jpg'
        },
        {
            title: 'Nokia 3310',
            id: 2, author: 'auuu',
            price: '100000$',
            coverImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nokia_3310_blue.jpg/1200px-Nokia_3310_blue.jpg'
        },
        {
            title: 'Siemens',
            id: 1, author: 'auuu',
            price: '100$',
            coverImg: 'https://files.gsmchoice.com/phones/siemens-a50/siemens-a50-big.jpg'
        }
    ]
    getBooks(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(Math.random()> 0.75){
                    reject(new Error('Something bad happened'))
                }
                resolve(this.data)
            }, 1500)
        })
    }
}