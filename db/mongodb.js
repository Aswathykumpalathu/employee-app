const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://AswathyKiran:Pulser90@cluster0.aq7mdxr.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('connected to atls');
})
.catch((e)=>{
    console.log('error cconnot connected')
})