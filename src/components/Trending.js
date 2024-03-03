// Trending.js
import "../styles/Common.css"; // Import your CSS file
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Trending = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=trending"
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 6, // Display 4 cards at a time
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  const handleShowDetails = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  return (
    <section className="contacts-section">
      <h1 className="heading">Top trending books</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {books.map((book, index) => (
            <div key={index}>
              <Card > 
                <div style={{ height: "60%",margin: "2vh 0" }}>
                  <Card.Img
                    onClick={() => handleShowDetails(book)}
                    variant="top"
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      width: "100%",
                      height: "100%",

                    }}
                  />
                </div>
                <div className="card-info">
                  <Card.Body style={{ height: "50%" }}>
                    <Card.Title>{book.volumeInfo.title}</Card.Title>
                    <Card.Text>
                      Author:{" "}
                      {book.volumeInfo.authors
                        ? book.volumeInfo.authors.join(", ")
                        : "Unknown"}
                    </Card.Text>
                  
                  </Card.Body>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>

      <Modal show={selectedBook !== null} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBook?.volumeInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedBook?.volumeInfo.imageLinks?.thumbnail}
            alt={selectedBook?.volumeInfo.title}
            style={{ marginBottom: "10px", justifyContent: "center" }}
          />
          <p>
            <strong>Author:</strong>{" "}
            {selectedBook?.volumeInfo.authors
              ? selectedBook?.volumeInfo.authors.join(", ")
              : "Unknown"}
          </p>
          <p>{selectedBook?.volumeInfo.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>
            Close
          </Button>
          <Button
            variant="primary"
            href={selectedBook?.volumeInfo.infoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Book
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Trending;
