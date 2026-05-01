import React from "react";
import t from 'prop-types';

export default function Form({ 
    date, 
    setDate, 
    daysMonthsYears, 
    setDaysMonthsYears
}) {
    daysMonthsYears = {days:0,months:0,years:0};
    return (        
        <form className="main-form">
            <label htmlFor="main-date" className="main-date">
                <span>Data:</span>
                <input 
                    type="date" 
                    id="main-date" 
                    className="main-date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </label>

            <label htmlFor="more-days">
                <span>+/- Dias:</span>
                <input 
                    type="number" 
                    id="more-days" 
                    className="number-input"
                    value={daysMonthsYears.days}
                    onChange={e => setDaysMonthsYears({ 
                        ...daysMonthsYears, 
                        days: e.target.value 
                    })}
                />
            </label>
            
            <label htmlFor="more-months">
                <span>+/- Meses:</span>
                <input 
                    type="number" 
                    id="more-months" 
                    className="number-input"
                    value={daysMonthsYears.months}
                    onChange={e => setDaysMonthsYears({ 
                        ...daysMonthsYears, 
                        months: e.target.value 
                    })}
                />
            </label>

            <label htmlFor="more-years">
                <span>+/- Anos:</span>
                <input 
                    type="number" 
                    id="more-years" 
                    className="number-input"
                    value={daysMonthsYears.years}
                    onChange={e => setDaysMonthsYears({ 
                        ...daysMonthsYears, 
                        years: e.target.value 
                    })}
                />
            </label>
            
        </form>
    );
}

Form.propTypes = {
    date: t.string.isRequired,
    setDate: t.func.isRequired,
    setDaysMonthsYears: t.func.isRequired,
    daysMonthsYears: t.shape({
        days: t.number,
        months: t.number,
        years: t.number
    }).isRequired
}