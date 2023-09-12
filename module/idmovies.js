const axios = require('axios')

async function idmovies(req, res) {



  const accountSid = 'AC1c2e11b28425b0e32793c1e73bc08595';
  const authToken = '694e0b8bbb950bc4851602cecbb6486b';
  const client = require('twilio')(accountSid, authToken);
  console.log(typeof (req.params.id))
  const number = '+' + req.params.id
  console.log(number)


    
    client.messages
        .create({
            body: 'تم قبول المعاملة الرجاء المراجعه برقم هاتفك المسجل ',
            from: '+12512704131',
            to: number
        })
        .then(message => console.log(message.sid))
        .done();
}



module.exports = { idmovies }


