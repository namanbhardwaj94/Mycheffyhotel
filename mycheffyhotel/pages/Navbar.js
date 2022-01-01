import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand text-danger" href="/">MyCheffy</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Chef</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Rent a kitchen</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Hotel</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <i class="icon-search icon-2x"></i>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      
      <input className="form-control mr-sm-2" type="delivery" placeholder="Delivery" aria-label="Delivery"></input>

      <button class="btn my-2 my-sm-0" type="submit"><a class= 'text-danger'>Login</a> | <a class='text-secondary'>Signup</a> </button>
    </form>
  </div>
</nav>

  )
}
