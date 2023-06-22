
/* Steps
Package Called nodemailer
package require
nodemailer initializer transporter
transporter.sendMail()
*/

const nodemailer =  require("nodemailer");

const mailoptions = {
    from: "gyalwanglama123@gmail.com" , // sender address
    to: "ss9984261@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?" // plain text body
    //html: "<b>Hello world?</b>", // html body
};

//gmail transporter ready
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'gyalwanglama123@gmail.com',
    pass:"emaietvabpimhlgs",
  }
});


const mailer =  (mailoptions,transporter) =>{
    transporter.sendMail(mailoptions,(err,info) =>{
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    });
};

mailer(mailoptions,transporter);