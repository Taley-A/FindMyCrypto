import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AllLocationBox from "./AllLocationsBox";

const AllLocations = ({ setCenterPoint }) => {
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
					console.log(location);
					return (
						<AllLocationBox
							key={location.atmId}
							location={location}
							setCenterPoint={setCenterPoint}
						/>
					);
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
