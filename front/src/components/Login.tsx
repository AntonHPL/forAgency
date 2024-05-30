import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slice';
import { FC } from 'react';

const Login: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const setUserFromGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
		if ("profileObj" in response) {
			const { profileObj: {
				name, givenName, familyName, googleId, email
			} } = response;
			dispatch(setUser({
				login: name,
				name: givenName,
				surname: familyName,
				middle_name: '',
				id: googleId,
				email,
				tel: ''
			}));
			navigate("/account")
		}
	}

	return (
		<GoogleLogin
			clientId={process.env.REACT_APP_CLIENT ?? ""}
			buttonText='...or sign in with Google'
			onSuccess={setUserFromGoogle}
			onFailure={(res) => console.error(res)}
			cookiePolicy='single_host_origin'
			isSignedIn
			className='main_btn--light'
		/>
	)
}


export default Login;