import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 20.5937,
    lng: 78.9629,
};

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCx4nMURq31FCbPZn8k-vrNJt8nwOEZwrg",
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Map</h2>
                <h1>Google Earth</h1>
                <div>
                    <h1>
                        Women Safety{" "}
                        <span role="img" aria-label="tent">
                            ⛺️
                        </span>
                    </h1>

                    <Locate panTo={panTo} />*

                    <GoogleMap
                        id="map"
                        mapContainerStyle={mapContainerStyle}
                        zoom={8}
                        center={center}
                        options={options}
                        onClick={onMapClick}
                        onLoad={onMapLoad}
                    >
                        {markers.map((marker) => (
                            <Marker
                                key={`${marker.lat}-${marker.lng}`}
                                position={{ lat: marker.lat, lng: marker.lng }}
                                onClick={() => {
                                    setSelected(marker);
                                }}
                                icon={{
                                    url: `/bear.svg`,
                                    origin: new window.google.maps.Point(0, 0),
                                    anchor: new window.google.maps.Point(15, 15),
                                    scaledSize: new window.google.maps.Size(30, 30),
                                }}
                            />
                        ))}

                        {selected ? (
                            <InfoWindow
                                position={{ lat: selected.lat, lng: selected.lng }}
                                onCloseClick={() => {
                                    setSelected(null);
                                }}
                            >
                                <div>
                                    <h2>
                                        <span role="img" aria-label="bear">
                                            ⚠
                                        </span>{" "}
                                        Alert
                                    </h2>
                                    <p>Spotted {formatRelative(selected.time, new Date())}</p>
                                </div>
                            </InfoWindow>
                        ) : null}
                    </GoogleMap>
                </div>
            </div>
        </>
    );
};

function Locate({ panTo }) {
    return (
        <button
            className="locate"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}
        >
            <img src="/compass.svg" alt="compass" />
        </button>
    );
}

export default Map;