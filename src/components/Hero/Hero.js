import React, { useState } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, List, ListItem } from './HeroStyles';

import { SERVER_HOST } from '../../constants/http_constants';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Hero = (props) => {
  const [nickname, setNickname] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
  }

  const onSubmit = () => {
    if (nickname === "") {
      alert('Никнейм не может быть пустым!');
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: nickname + "@gmail.com",
        name: nickname,
        surname: nickname,
        password: nickname,
        phone: nickname,
      }),
    }
    fetch(SERVER_HOST + "/api/auth/signup", requestOptions).then((response) => {
      if (response.status !== 200) {
        toast('Что-то пошло не так, попробуйте еще раз зарегистрироваться.', { autoClose: 4000, });
        console.log("response: ", response);
        return;
      } else {
        toast(`${nickname}, Вы успешно зарегистрировались! Можете посмотреть список участников чуть ниже.`, { autoClose: 3000, })
      }
    })
  }

  return (
    <>
      <ToastContainer />
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Добро пожаловать <br />
            на мой День Рождения
          </SectionTitle>
          <SectionText>
            Прошу, придумайте себе интересный "никнейм" и зарегистрируйтесь по кнопке ниже.
          </SectionText>
          <form>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-3 col-form-label" style={{
                color: "white",
                fontSize: "24px",
                lineHeight: "40px",
                fontWeight: "300"
              }}>Ваш "никнейм"</label>
              <div className="form-group mx-sm-3" style={{ marginBottom: "15px" }}>
                <input type="text" class="form-control" onChange={onChange} style={{
                  fontSize: "24px",
                  lineHeight: "40px",
                  fontWeight: "300"
                }} />
              </div>
            </div>
          </form>
          <Button className="mb-2" onClick={onSubmit}>
            Регайся
          </Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;