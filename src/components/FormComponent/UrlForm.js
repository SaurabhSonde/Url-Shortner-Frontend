import React, { useState, useRef } from "react";
import "./style.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
  Form,
  Alert,
} from "react-bootstrap";
import { shortlink } from "./Helper/urlHelper";
import "bootstrap-icons/font/bootstrap-icons.css";

const UrlForm = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [values, setValues] = useState({
    originalUrl: "",
    error: "",
  });
  const [copyText, setCopyText] = useState("");
  const textAreaRef = useRef(null);
  const { originalUrl, error } = values;

  //copy to clipboard
  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopyText("Copied!");
  };

  //handle change
  const handleChange = (originalUrl) => (event) => {
    setValues({ ...values, error: false, [originalUrl]: event.target.value });
  };

  //on submit
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });

    shortlink({ originalUrl })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
          console.log(data.error);
        } else {
          setValues({
            originalUrl: "",
            error: "",
          });
          setShortUrl(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //URL Form
  const linkForm = () => {
    return (
      <Container className="formcontainer">
        <Row>
          <Col md={12} sm={12} lg={12}>
            <InputGroup className="forminput" size="md">
              <FormControl
                placeholder="Short your url here"
                aria-label="Short your url here"
                onChange={handleChange("originalUrl")}
                value={originalUrl}
              />
              <InputGroup.Append>
                <Button onClick={onSubmit}>Shorten</Button>
              </InputGroup.Append>
            </InputGroup>
            <Form.Text className="text-muted">
              We'll never share your links with anyone else.
            </Form.Text>
          </Col>
        </Row>
      </Container>
    );
  };

  //form to copy short url
  const copyForm = () => {
    return (
      <Container>
        <div className="section">
          <div className="shorturlform">
            <Form>
              <Form.Control
                type="text"
                value={shortUrl}
                ref={textAreaRef}
                readOnly
              />
            </Form>
          </div>
          <div className="clipboardImages">
            {copyText ? (
              <i
                class="bi bi-clipboard-check"
                style={{ fontSize: "1.8em" }}
              ></i>
            ) : (
              <i
                className="bi bi-clipboard"
                style={{ fontSize: "1.8em" }}
                onClick={copyToClipboard}
              ></i>
            )}
          </div>
        </div>
      </Container>
    );
  };

  //error messages
  const errorMessage = () => {
    return (
      <Alert
        className="text-center"
        variant="danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </Alert>
    );
  };
  return (
    <div>
      {errorMessage()}
      {shortUrl && copyForm()}
      {linkForm()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </div>
  );
};

export default UrlForm;
