const mongoose = require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

//DELETEEE 
// Post.findByIdAndDelete('642a9971ce4eb54eb4635977',{
//  }).then(post => {
//     console.log(post);
//    })
//    .catch(err => {
//      console.error(err);
//    }); 

// Post.find({
//  }).then(post => {
//     console.log(post);
//    })
//    .catch(err => {
//      console.error(err);
//    }); 
 
//UPDATEEE
// Post.findByIdAndUpdate("642a9180bd23b7b9fa214002",{
//  title: 'güncelleme yapıldı.'

//  }).then(post => {
//     console.log(post);
//    })
//    .catch(err => {
//      console.error(err);
//    }); 

// gösterilen ıd'yi getirir
// Post.findById('642a9180bd23b7b9fa214002',{
// }).then(post => {
//     console.log(post);
//    })
//    .catch(err => {
//      console.error(err);
//    });
// tüm verileri getirme
// Post.find({
// }).then(post => {
//   console.log(post);
// })
// .catch(err => {
//   console.error(err);
// });

// Post.create({
//   title: 'ikinci Post Başlığım.',
//   content: ' ikinci post içeriği, lorem ipsum text.'
// }).then(post => {
//   console.log(post);
// })
// .catch(err => {
//   console.error(err);
// });

