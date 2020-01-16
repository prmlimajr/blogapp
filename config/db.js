if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: 'mongodb+srv://prmlimajr:onegai@cluster0-nvqet.mongodb.net/test?retryWrites=true&w=majority'}
}else{
    module.exports = {mongoURI: 'mongodb://localhost/blogapp'}
}