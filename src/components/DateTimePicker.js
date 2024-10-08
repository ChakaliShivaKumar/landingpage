import React, { useState } from 'react';
import Datetime from 'react-datetime';

const DateTimePicker = () => {
    const [dateTime, setDateTime] = useState(null);

    const handleChange = (date) => {
        setDateTime(date);
    };

    return (
        <>
            <div className="form-group">
                <Datetime
                    value={dateTime}
                    onChange={handleChange}
                    dateFormat="YYYY-MM-DD"
                    timeFormat="HH:mm"
                    inputProps={{ className: "form-control" }}
                />
            </div>
            {dateTime}
        </>
    );
};

export default DateTimePicker;
