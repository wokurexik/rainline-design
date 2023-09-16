import React from 'react';
import {useNavigate} from 'react-router-dom';

export function BackButton() {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
	return <>	
		<button className='goback-btn' onClick={goBack}>Zpět</button>	
	</>;
}
