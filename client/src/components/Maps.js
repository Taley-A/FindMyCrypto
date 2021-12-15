import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import {
	GoogleMap,
	InfoWindow,
	useLoadScript,
	Marker,
} from "@react-google-maps/api";

import MapsStyles from "../MapsStyles";

const Maps = ({ centerPoint }) => {
	const mapRef = useRef();

	console.log(centerPoint);

	const handleMapLoad = useCallback((map) => {
		mapRef.current = map;
	}, []);

	const libraries = ["places"];

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});

	// const [centerPoint, setCenterPoint] = useState({
	// 	lat: 45.460815,
	// 	lng: -73.65126,
	// });

	const options = {
		styles: MapsStyles,
	};

	const [locations, setLocations] = useState([]);
	const [markers, setMarkers] = useState(null);

	useEffect(() => {
		fetch(`/api/locations/`)
			.then((res) => res.json())
			.then((res) => {
				setLocations(res.data);
				console.log(res.data);
			});
	}, []);

	useEffect(() => {
		setMarkers(
			locations.map((location) => {
				return location.latLng;
			})
		);
	}, [locations]);

	console.log(markers);

	const [selected, setSelected] = useState(null);

	const handleMarkerClick = useCallback((event) => {
		setMarkers((current) => [
			...current,
			{
				lat: event.latLng.lat(),
				lng: event.latLng.lng(),
			},
		]);
	}, []);

	return (
		<Container>
			{loadError ? (
				"Error loading maps."
			) : !isLoaded ? (
				"Loading maps."
			) : (
				<Box>
					<GoogleMap
						onLoad={handleMapLoad}
						mapContainerStyle={mapContainerStyle}
						center={centerPoint}
						zoom={12}
						options={options}
					>
						{markers &&
							markers.map((marker) => {
								console.log(marker);
								return (
									<Marker
										key={`${marker.lat}-${marker.lng}`}
										position={{ lat: marker.lat, lng: marker.lng }}
										icon={{
											url: "/bitcoin.svg",
											scaledSize: new window.google.maps.Size(30, 30),
											origin: new window.google.maps.Point(0, 0),
											anchor: new window.google.maps.Point(15, 15),
										}}
									/>
								);
							})}

						{selected ? (
							<InfoWindow
								position={{ lat: selected.lat, lng: selected.lng }}
								onCloseClick={() => {
									setSelected(null);
								}}
							>
								<div>
									<h2>Cryptocurrency ATM</h2>
								</div>
							</InfoWindow>
						) : null}
					</GoogleMap>
				</Box>
			)}
			<LocationsBox>
				<LocationWrapper>
					<SingleLocation></SingleLocation>
				</LocationWrapper>
			</LocationsBox>
		</Container>
	);
};

export default Maps;

const LocationsBox = styled.div``;

const LocationWrapper = styled.div``;

const SingleLocation = styled.div``;

const Container = styled.div`
	display: flex;
`;

const Box = styled.div`
	position: relative;
`;

const mapContainerStyle = {
	position: "relative",
	border: "3px solid #010606",
	marginTop: "var(--nav-height)",
	height: "92vh",
	width: "70vw",
	zIndex: "1",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
};

///////////////////////////////////////////////
// const Title = styled.div`
// 	display: flex;
// 	position: absolute;
// 	top: 1rem;
// 	left: 1rem;
// 	color: var(--secondary);
// 	z-index: 10;
// 	align-items: center;
// 	text-align: center;
// 	font-size: 2rem;
// 	font-family: "Encode Sans Expanded", sans-serif;
// 	font-weight: 900;
// `;
//
// <Title>
//<Logo src={LogoFMC} /> FindMyCrypto
//</Title>
//
// const Logo = styled.img`
// 	border-radius: 20px;
// 	width: 4rem;
// 	padding: 10px;
// `;
///////////////////////////////////////////////
