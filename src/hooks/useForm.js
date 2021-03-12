// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValue) => {
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [values, setValues] = useState(initialValue);

	const handleChanges = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowSuccessMessage(true);
	};
	return [showSuccessMessage, values, handleSubmit, handleChanges];
};

export default useForm;
