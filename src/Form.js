import {nameRef, emailRef} from "./Homepage";

function handleSumbit(e){
    e.preventDefault();
}

const Form = () => (
    <>
      <div>
        <form onSubmit={handleSumbit}>
            <h3>Login Page</h3>
          <input type="text" placeholder="Name" ref={nameRef} />
          <br />
          <br />
          <input type="email" placeholder="Email" ref={emailRef} />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );

export default Form;


