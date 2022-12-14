import React, {useRef,useState} from 'react'
import emailjs from '@emailjs/browser'
import { TextField }  from '@mui/material';
import { Button } from '@mui/material';


    const Service = () => {
      const form = useRef();
      const [name, setName] = useState('');
      const [partySize, setPartySize] = useState('');
      const [attending, setAttending] = useState('');
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_u2f5wlu', 'template_aqibbfi', form.current, 'dkSCkT9G1nrflBiqD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName('');
        setPartySize('');
        setAttending('');
    };
    return (
        <form ref={form} name="form" onSubmit={sendEmail}>
        <div className="form-content">
          <div className="instructions-container">
            <h4>
              Please fill out this form to confirm attendance.
            </h4>
          </div>
          <div className="questions-container">
            <h4>
              Name:
            </h4>
            <TextField id="outlined-basic" label="Full Name" variant="outlined" name="user_name" onChange={e => setName(e.target.value)} value={name} />
            <h4>
              Party size:
            </h4>
            <TextField id="outlined-basic" label="Party size" variant="outlined" name="party_size" onChange={e => setPartySize(e.target.value)} value={partySize}/>
            <h4>
              Attending:
            </h4>
            <TextField id="outlined-basic" label="Yes or No" variant="outlined" name="attending" onChange={e => setAttending(e.target.value)} value={attending} />
          </div>
          <div className='button-container'>
              <Button variant="contained" type="submit" value="send">Submit</Button>
          </div>
        </div>
      </form>
    )
}

export default Service;
