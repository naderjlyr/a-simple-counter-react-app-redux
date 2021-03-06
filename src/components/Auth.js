import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/slices/auth";
const Auth = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <>
      {!isAuth && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={loginSubmitHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button>Login</button>
            </form>
          </section>
        </main>
      )}
    </>
  );
};

export default Auth;
