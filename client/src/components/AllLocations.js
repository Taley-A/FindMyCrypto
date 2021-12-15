import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AllLocationBox from "./AllLocationsBox";

const AllLocations = () => {
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		fetch(`/api/locations/`)
			.then((res) => res.json())
			.then((res) => {
				setLocations(res.data);
				console.log(res.data);
			});
	}, []);

	return (
		<>
			<Container>
				{locations.map((location) => {
					return <AllLocationBox location={location} />;
				})}
			</Container>
		</>
	);
};
export default AllLocations;

const Container = styled.div`
	overflow: scroll;
	height: 92vh;
`;
