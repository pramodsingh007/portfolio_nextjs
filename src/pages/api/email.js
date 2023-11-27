import {createTransport} from 'nodemailer';

const  email = (req,res)=>{
    console.log(process.env.EMAIL,process.env.PASSWORD)
    const body = req.body
    if(req.method==="POST"){
        const transporter  = createTransport({
            service:'gmail',
            host: 'smtp.gmail.com',
             port: 465,
             secure: true,
            auth:{
              user:process.env.EMAIL,
              pass:process.env.PASSWORD
            }
          }) 
           
          transporter.sendMail({
                        from:process.env.EMAIL,
                        to:process.env.RECEIVER,
                        subject:`Hello sir you have a message from ${body.name}`,
                        text:`message: ${body.message} email: ${body.email}`
                      }).then(()=>{
                        res.status(200).json({message:'email sent!'})
                      }).catch(err=>console.log(err))
    }

}


export default email