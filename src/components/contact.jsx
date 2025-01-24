

import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const Contact = (props) => {
  const [{ name, email, phone, message }, setState] = useState(initialState);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSfFEp8yiCnJQfWZ4aaIXWfGg1xqhSiQLzZzVuDnO8HfSA7Nyw/formResponse', {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    })
      .then(() => {
        setStatus('הטופס נשלח בהצלחה!');
        form.reset(); // Reset the form fields after successful submission
        setState({ ...initialState }); // Reset React state
      })
      .catch((error) => {
        setStatus('ERROR');
        console.error('Error:', error);
        alert('אירעה שגיאה בשליחת הטופס.');
      });
  };

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>צרו קשר</h2>
                <p>השאירו את הפרטים ואחזור אליכם בהקדם האפשרי.</p>
              </div>
              <form name='sentMessage' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name="entry.1787022952"
                        className='form-control'
                        placeholder='שם'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name="entry.705535326"
                        className='form-control'
                        placeholder='מייל'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='phone'
                        name="entry.206473801"
                        className='form-control'
                        placeholder='טלפון'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name="entry.529467019"
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='הודעה'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  שלחו הודעה
                </button>
              </form>
              <p>{status}</p>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>פרטי קשר</h3>
              {/* <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p> */}
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i>  טלפון
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> מייל
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            
          </div>

          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.whatsapp : '/'} target='blank'>
                      {/* <i className='fa fa-facebook'></i> */}
                      <i className='fa fa-whatsapp'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.sentemail : '/'} target='blank'>
                      <i className='fa fa-envelope'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.phonecall : '/'} target='blank'>
                      <i className='fa fa-phone'></i>
                      
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

