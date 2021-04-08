import logo from '../assets/logo.png';
import chevronDown from '../assets/down-chevron.svg';

export default function HeaderMain() {
  return (
    <header className="dashboard-header flex">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="user-info bg-grey flex	 ">
        <img src={chevronDown} alt="down" className="icon" />
        <p className="username">Annette</p>
        <img
          src="https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          alt="user"
          className="user-avatar"
        />
      </div>
    </header>
  );
}
