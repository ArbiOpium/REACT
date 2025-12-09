import { useEffect, useState, useContext } from "react";
import SiteButton from "../../../features/buttons/SiteButton";
import ButtonTypes from "../../../features/buttons/types/ButtonTypes";
import UserDao from "../../../entities/user/api/UserDao";
import { AppContext } from "../../../features/app_context/AppContext";

export default function Auth() {
  const { user } = useContext(AppContext);
  return user == null ? <AuthForm /> : <Profile />;
}

function AuthForm() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFormValid, setFormValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUser } = useContext(AppContext);

  useEffect(() => {
    setFormValid(login.length > 2 && password.length > 2);
  }, [login, password]);

  const onAuthClick = () => {
    setIsLoading(true);
    UserDao.authenticate(login, password)
      .then((res) => {
        if (res == null) {
          alert("User not authenticated");
        } else {
          setUser(res);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1 className="display-4 text-center">Auth</h1>

      <div className="position-relative row mt-4">
        <div className="input-group mb-3">
          <span className="input-group-text" id="login-addon">
            <i className="bi bi-key"></i>
          </span>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="login-addon"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="password-addon">
            <i className="bi bi-unlock2"></i>
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="password-addon"
          />
        </div>

        <SiteButton
          text="Login"
          buttonType={isFormValid ? ButtonTypes.Red : ButtonTypes.White}
          action={onAuthClick}
        />

        {isLoading && (
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ zIndex: 10 }}
          >
            <img
              src="/public/img/loader.gif"
              alt="Loading..."
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                objectFit: "contain",
                marginLeft: "50%",
                marginTop: "120px",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

function Profile() {
  const { user, setUser } = useContext(AppContext);

  return (
    <>
      <h1 className="display-4 text-center">Profile</h1>
      <div className="row">
        <div className="col col-6 offset-3 text-center p-3">
          <div className="row">
            <div className="col col-4 offset-4">
              <img
                src={user?.imageUrl}
                alt={user?.login}
                className="w-100 rounded-circle"
              ></img>
            </div>
            <h2 className="display-5">{user?.name}</h2>
            <div className="row text-start">
              <div className="col col-3 offset-1"> Ім'я:</div>
              <div className="col col-5">
                <div className="col col-1">
                  <i className="bi bi-pencil"></i>
                </div>
                <p>{user?.name}</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col col-3 offset-1"> Email:</div>
              <div className="col col-5">
                <div className="col col-1">
                  <i className="bi bi-pencil"></i>
                </div>
                <p>{user?.email}</p>
              </div>
            </div>
            <div className="row text-start">
              <div className="col col-3 offset-1"> Адреса:</div>
              <div className="col col-5">
                <div className="col col-1">
                  <i className="bi bi-pencil"></i>
                </div>
                <p>{user?.address}</p>
              </div>
              <div className="row text-start">
                <div className="col col-3 offset-1"> Дата народження:</div>
                <div className="col col-5">
                  <div className="col col-1">
                    <i className="bi bi-pencil"></i>
                  </div>
                  <p>{user?.dob}</p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col col-4 offset-4">
                  <div className="row">
                    <SiteButton
                      buttonType={ButtonTypes.White}
                      text="Вихід"
                      action={() => setUser(null)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
