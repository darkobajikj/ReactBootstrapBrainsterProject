import React, { useState } from 'react'
import { isSameDay } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { Calendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { Container, Col, Row} from "react-bootstrap";



 function CalendarExample() {
  
  const [selectedDates, setSelectedDates] = useState([])
  const modifiers = {
    selected: date => selectedDates.some(selectedDate => isSameDay(selectedDate, date))
  }
  const handleDayClick = date => {
    setSelectedDates([...selectedDates, date])
  }
  
  return (
    <Container>
      <Row>
        <Col>
    <Calendar onDayClick={handleDayClick} modifiers={modifiers} locale={enGB} />
    </Col>
    </Row>
    </Container>
  )
}

export default CalendarExample;

