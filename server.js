const x=require('express'); const y=x(); y.use(x.json());
const z=require('mongoose'); const dotenv =require('dotenv'); dotenv.config();
const bcryptjs=require('bcryptjs');
y.use(x.static('build'));
const port=process.env.PORT || 4000; 
z.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true},{collection:"new registration"}).then(d=>console.log("database connected")).catch(d=>console.log("error; failed to connect to the database"));

const schema=new z.Schema({name:{type:String,required:true},email:{type:String,required:true},password:{type:String,required:true}});
schema.pre('save',async function(s){if(this.isModified('password')){this.password=await bcryptjs.hash(this.password,12);}s();});
const collection=z.model("this registeration",schema); 


y.post('/register',async(a,b)=>{const find=await collection.findOne({email:a.body.email}); if(find){b.json({message:"This email is already registered",registered:true});}else{const doc=new collection({email:a.body.email,name:a.body.name,password:a.body.password}); await doc.save(); b.status(201).json({message:"Account registered.",registered:false});}});



y.post('/login',async (a,b)=>{const g=await collection.findOne({email:a.body.email}); if(g){const gm=await bcryptjs.compare(a.body.password,g.password);if(gm){ b.json({ok:true,name:g.name});}else{b.json({ok:false});}}else{b.json({ok:false});}});






y.listen(port,()=>console.log(`port ${port}`));