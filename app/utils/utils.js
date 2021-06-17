export const customError = (name, message, code) => {
	const errorObject = new Error(message);
	errorObject.name = name;
	errorObject.code = code;
	return errorObject;
};
