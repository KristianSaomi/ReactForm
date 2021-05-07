import logo from './slack.svg';
import './App.css';
import {useState} from "react";



function App() {
  const [changeForm, setChangeForm] = useState('true');

  function form1() {
    if(changeForm === true ){

    return(
    <form className='Register_form'>

    <input className='inputValue' type="email" required placeholder="Email" /><br />


    <input type="password" id="pwd" name="pwd" required minLength="6" placeholder="Password"></input><br></br>

    <label for="taxation">Your taxation country</label><br />
    <select name="taxation" id="cars">
      <option value="Sweden">Sweden</option>
      <option value="England">England</option>
      <option value="Finland">Finland</option>
      <option value="Norway">Norway</option>
    </select>
    <br></br>

    <label for="language">Language</label><br />
    <select name="language" id="cars">
      <option value="Swedish">Swedish</option>
      <option value="English">English</option>
    </select>
    <div className='checkbox'>
      <input type="checkbox" className="checkbox" value="check" id="agree" required />
    We need your consist to be able to provide<br></br>you with information based on your profile.<br />Read more in our <a href="url">Privacy Policy</a><br />
    </div>
    <button type="submit" className='SubmitBtn'><b>SIGN UP</b></button>
  </form>
  )
}else {
return (
  <form className='Register_form'>

  <input className='inputValue' type="email" required placeholder="Email" /><br />


  <input type="password" id="pwd" name="pwd" required minLength="6" placeholder="Password"></input><br></br>

  <label for="taxation">Where is the company?</label><br />
  <select name="taxation" id="taxation">
    <option value="Sweden">Sweden</option>
    <option value="England">England</option>
    <option value="Finland">Finland</option>
    <option value="Norway">Norway</option>
    <option value="Other">Other</option>
  </select>
  <br></br>

  <label for="language">Size of company</label><br />
  <select name="language" id="language">
    <option value="Swedish"> 1-5 </option>
    <option value="English"> 6-10</option>
    <option value="English"> 10-15</option>
    <option value="English"> 15+</option>
  </select>
  <div className='checkbox'>
    <input type="checkbox" className="checkbox" value="check" id="agree" required />
  We need your consist to be able to provide<br></br>you with information based on your profile.<br />Read more in our <a href="url">Privacy Policy</a><br />
  </div>
  <button type="submit" className='SubmitBtn'><b>SIGN UP</b></button>
</form>
)
}

  }
  return (
   
    <div className="App">
    <div className='App-Background'>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-Form">
        <b>Welcome!</b>

        <div className='container-usertype'>
          <button className='btn-usertype' onClick={() => setChangeForm(true)}>Freelancer</button> &nbsp;
          <button className='btn-usertype' onClick={() => setChangeForm(false)}>Corperate</button>
        </div>
       

        <div className='container-btn-bankId'> <button className='btn-bankId'> Sign in with BankID</button></div>
        <p className='orDivider'> **** OR **** </p>
        {form1()}

      </div>
      <div className='OutsideBox'>As a user of the INEXT Freelancer service I hereby declares that I am<br />over 18 years old and approve the <b>Temporary Worker Agreement<br />and General Terms and Conditions.<b /></b></div>
    <div className='OutsideLogin' >Do you have an account? <a href="www.google.se">Sign in</a></div>
    
    </div>
  </div>

  );
}

export default App;
