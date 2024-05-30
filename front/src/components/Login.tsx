import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slice';
import { FC } from 'react';

const Login: FC = () => {
	const dispatch = useDispatch();
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
			}))
		}
	}

	return (
		<GoogleLogin
			clientId={process.env.REACT_APP_CLIENT ?? ""}
			buttonText='Login'
			onSuccess={setUserFromGoogle}
			onFailure={(res) => console.error(res)}
			cookiePolicy='single_host_origin'
			isSignedIn
		/>
	)
}


export default Login;