import React from "react";

const showPhotos = () => {
	console.log("photos");
	const [data, setData] = useState("");

	useEffect(() => {
		fetch("http://localhost:3000")
			.then((res) => res.json())
			.then((data) => setData(data.message))
			.catch((err) => console.error(err));
	}, []);
	return null;
};

export default showPhotos;
