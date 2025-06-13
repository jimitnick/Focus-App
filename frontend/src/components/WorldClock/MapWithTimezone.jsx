// MapWithTimezone.jsx
import React, { useEffect, useRef, useState } from 'react';

const MapWithTimezone = () => {
  const mapRef = useRef(null);
  const [timezoneInfo, setTimezoneInfo] = useState(null);

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 20, lng: 0 },
        zoom: 2,
        mapTypeId: 'terrain',
      });

      map.addListener('click', (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        fetchTimezone(lat, lng);
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_EARTH_API}&callback=initMap`;
      script.async = true;
      window.initMap = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  const fetchTimezone = (lat, lng) => {
    const timestamp = Math.floor(Date.now() / 1000);
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=${import.meta.env.VITE_GOOGLE_EARTH_API}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'OK') {
          setTimezoneInfo({
            timeZoneId: data.timeZoneId,
            offset: secondsToOffset(data.rawOffset + data.dstOffset),
          });
        } else {
          setTimezoneInfo({ error: data.status });
        }
      })
      .catch((err) => {
        setTimezoneInfo({ error: err.message });
      });
  };

  const secondsToOffset = (seconds) => {
    const sign = seconds >= 0 ? '+' : '-';
    const abs = Math.abs(seconds);
    const hours = String(Math.floor(abs / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((abs % 3600) / 60)).padStart(2, '0');
    return `${sign}${hours}:${minutes}`;
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div ref={mapRef} style={{ width: '100%', height: '600px' }}></div>
      <div style={{ padding: '1rem', fontSize: '18px' }}>
        {timezoneInfo ? (
          timezoneInfo.error ? (
            <div>Error: {timezoneInfo.error}</div>
          ) : (
            <div>
              Timezone: <strong>{timezoneInfo.timeZoneId}</strong> — UTC
              <strong>{timezoneInfo.offset}</strong>
            </div>
          )
        ) : (
          'Click on a location to get timezone info'
        )}
      </div>
    </div>
  );
};

export default MapWithTimezone;
