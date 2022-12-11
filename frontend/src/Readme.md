{/* {
  currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
} */}

const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


   const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
      };
      fetch('http://localhost:8000/user/login', requestOptions).then((res) => {
        console.log('djkasdkashdasj', res);
      })