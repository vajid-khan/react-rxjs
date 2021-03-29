import { useState } from 'react';
import { connect } from 'react-redux';
import { initLogin, initLogout } from './lib/actions';

const  App = props => {
	const [credentials, setCredentials] = useState({
		email: {
			value: '',
			error: false
		},
		password: {
			value: '',
			error: false,
		}
	});

	const handleChange =  e => setCredentials(prev=> ({...prev,
		[e.target.id]:{
			...prev[e.target.id],
			error: e.target.value ? false : true,
			value: e.target.value
		},
	}))

	const onSubmit = (e) => {
		
		e.preventDefault();

		if(credentials.email.error || credentials.password.error){
			return;
		}

		props.login({
			email: credentials.email.value,
			password: credentials.password.value
		});
	}

	return (
		<div className="row">
			<div className="col-xs-6 col-xs-offset-3">
				{
					props.auth ?
						<>
							{JSON.stringify(props.user, null, 2)}
							<button type="button" className="btn btn-primary btn-block" onClick={props.logout}>
								{props.showIndicator ? 'Loading...' : 'Logout'}
							</button>
						</>
					:
					<form onSubmit={onSubmit}>
						<div className={`form-group ${credentials.email.error ? 'has-error' : ''}`}>
							<label htmlFor="email">Email address:</label>
							<input type="email" className="form-control" id="email" required value={credentials.email.value} onChange={handleChange} />
						</div>
						<div className={`form-group ${credentials.password.error ? 'has-error' : ''}`}>
							<label htmlFor="pwd">Password:</label>
							<input type="password" className="form-control" id="password" required value={credentials.password.value} onChange={handleChange} />
						</div>
						<button type="submit" className="btn btn-primary btn-block">
							{props.showIndicator ? 'Loading...' : 'Submit'}
						</button>
					</form>
				}
			</div>
		</div>	
	);
}

const mapStateToProps = store => {
	return {
		auth:store.auth.auth,
		user: store.auth.user,
		showIndicator: store.auth.showIndicator
	}
}

const mapDispatchToProps = dispatch => {
	return {
		login:(credentials)=>dispatch(initLogin(credentials)),
		logout:()=>dispatch(initLogout()),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
