import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';

const JobApplication = () => {
  return (
    <Container className="mt-5">
      <Row>
        {/* Left Section - Job Details and Form */}
        <Col md={8}>
          <h2 className="mb-4">UI/UX Engineer | Full Time | Google</h2>
          <p>Please read all content of the advertisement and apply. If any information is required from the advertiser, please send with this message. Also, you can send an attachment up to 2MB.</p>
          
          {/* Message Box */}
          <Form.Group className="mb-3">
            <Form.Control 
              as="textarea" 
              rows={5} 
              placeholder="You can write a message here"
              className="border rounded p-3"
            />
          </Form.Group>

          {/* File Attachment */}
          <div className="d-flex justify-content-between align-items-center border rounded p-3 mb-3">
            <span>Upload file here</span>
            <Button variant="light" className="border"><i className="bi bi-paperclip"></i></Button>
          </div>

          {/* Apply Now Button */}
          <Button variant="primary" className="w-100 p-2">APPLY NOW</Button>
        </Col>

        {/* Right Section - Job Info Card */}
        <Col md={4}>
          <Card className="p-4 mb-4" style={{ backgroundColor: '#E7F1FF' }}>
            <div className="text-center mb-4">
              <img 
                src="https://via.placeholder.com/60" 
                alt="company logo" 
                className="mb-2" 
              />
              <h5>UI/UX Engineer | Full Time | Google</h5>
              <p>No 123, Vijerama Road Colombo 7 <br /> Full Time <br /> 2 Days Left</p>
            </div>
            <hr />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            </p>
            <h6>Contact</h6>
            <p>
              +94 701234567 <br />
              +94 11234567 <br />
              companyname@gmail.com
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JobApplication;