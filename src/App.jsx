import { useState } from 'react'
import './App.css'

export function App(){
  return(
    <>
        <header>
      <h1>Login</h1>
    </header>

    <main>
      <form action="">
        <div>
          <label htmlFor="usuario">Usuario</label>
          <input type="text" id='usuario' placeholder='Digite seu nome'/>
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" id='senha' placeholder='Digite sua senha'/>
        </div>

        <button>Entrar</button>
      </form>
    </main>
  </>
  )

}