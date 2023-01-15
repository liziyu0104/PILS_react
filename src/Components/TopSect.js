import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import user from "../img/user.png";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function TopSect() {
  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const signIn = () => {
    axios.post('https://stalco.tk/api/user/login', {
      email: email,
      password: pwd
    })
    .then(function (response) {
      console.log(response);
      response.status === 200 && setSignedIn(true)
      //TODO save Session id dans local storage -> get 
      localStorage.setItem("auth", response.data.data.session_id +" "+ response.data.data.session_secret);

    })
    .catch(function (error) {
      error.response.status === 404 && notify("Compte introuvable");
    });
  }

  const signUp = () => {
    axios.post('https://stalco.tk/api/user/signup', {
      email: email,
      password: pwd
    })
    .then(function (response) {
      console.log(response);
      response.status === 200 && setSignedIn(true)
    })
    .catch(function (error) {
      error.response.status === 409 && notify("Ce compte existe déjà");
    });
  }

  const signOut = (message) => {
    setSignedIn(false)
    localStorage.removeItem("auth");
  }

  const notify = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div className="top-section">
      <div className="user-info">
        <div className="user-img">
          <img src={user} alt="user" />
        </div>
        <p className="user-name">Welcome</p>
        <>
        {signedIn ? 
          <> 
          <p className="user-name">Vous êtes connecté au compte administrateur de {email}</p>
          <Button variant="primary" onClick={signOut}>
            Se déconnecter
          </Button>
          </>
        :
        <Form>
          <Form.Text className="text-muted">
            Vous êtes membre du personnel ? Connectez-vous pour accéder aux fonctionnalités d'administration
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse email : </Form.Label>
            <Form.Control type="email" placeholder="votre email ici" onChange={(o) => {setEmail(o.target.value)}} />
           </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="mot de passe" onChange={(o) => {setPwd(o.target.value)}}/>
          </Form.Group>
          <Button variant="primary" onClick={signUp}>
            S'inscrire
          </Button>
          <Button variant="secundary" onClick={signIn}>
            Se connecter
          </Button>
        </Form>}
        </>
      </div>

      

      <div className="search-box">
        {/* <input type="text" placeholder="Search food..." /> */}
        <i>
          {/* <FaSearch /> */}
        </i>
      </div>
    </div>
  );
}

export default TopSect;
