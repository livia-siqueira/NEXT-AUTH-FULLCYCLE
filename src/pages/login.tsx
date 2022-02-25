import styles from "../../styles/LoginPage.module.css";

import * as React from "react";
import http from "../utils/http";
import { setCookie } from "../utils/cookies";
import {useRouter} from 'next/router'

type Props = {};


const LoginPage: React.FC = (props: Props) => {
  const router = useRouter();
  
  
  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const username = (document.querySelector("#username") as HTMLInputElement)
      .value;
    const password = (document.querySelector("#password") as HTMLInputElement)
      .value;

    const {data  } = await http.post("login", { username, password });
    setCookie('token', data.token)
    router.push('/pagePrivate');
}
  return (
    <form method="POST" onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="username">Usuário</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password </label>
        <input type="text" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
