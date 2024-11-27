import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { sendMessageToBackEnd } from './sendMessage';


const InputForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSendTextClick = async (e) => {
    e.preventDefault();
    await sendMessageToBackEnd(phoneNumber, message)
  }

  return (
            <Container className='mt-5'>
              <Row>
                <Col>
                <img src='/images/heron-school-logo.jpg' alt="Heron school logo" width="300" height="200"/>
                </Col>
              </Row>
                <Row>
                  <Col>
                  </Col>
                  <Col>
                    <Form onSubmit={ handleSendTextClick }>
                      <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Enter a phone number</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Phone Number"
                          value={phoneNumber}
                          onChange={(e)=> handlePhoneNumberChange(e)} />
                        <Form.Text className="text-muted">
                          Don't forget to add the number to your twilio account first.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Text Message</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={3} 
                          value={message}
                          onChange={(e) => handleMessageChange(e)}
                          placeholder="Message" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Send Text!
                      </Button>
                    </Form>
                  </Col>
                  <Col></Col>
                </Row>
            </Container>
  )
}

export default InputForm