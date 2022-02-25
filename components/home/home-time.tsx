import React, { useState, useEffect } from "react";

export const CurrentTime: React.FC = () => {
    const [date, setDate] = useState(new Date());
    let dateInterval: number;
  
    const updateDate = () => setDate(new Date());
  
    useEffect(() => {
      var dateInterval = setInterval(updateDate, 10000)
      return () => {
        if (dateInterval)
          clearInterval(dateInterval)
      };
    }, [])
  
    return (
      <>
        {(date.getHours() < 10 ? "0" : "") + date.getHours()}:{(date.getMinutes() < 10 ? "0" : "") + date.getMinutes()}
      </>
    )
}