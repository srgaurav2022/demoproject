import React, { useState } from "react";
import TimezoneSelect from "react-timezone-select";

const Timezone = () => {
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  return (
    <div className="App">
      <h2>Timezone:</h2>
      <div className="timezone--wrapper">
        <TimezoneSelect
          value={timezone}
          onChange={setTimezone}
          labelStyle="altName"
          timezones={{
            "Asia/Kolkata": "India",
            "America/Adak": "United States",
          }}
        />
      </div>
    </div>
  );
};
export default Timezone;
