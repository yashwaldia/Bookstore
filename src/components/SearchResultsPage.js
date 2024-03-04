import React, { useState, useEffect } from 'react';
import NavbarTop from './Navbartop';
import '../styles/Common.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'; // Import Modal component
import Button from "react-bootstrap/Button";

function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // State to track the selected book
  const [error, setError] = useState(null); // State to track error
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('q');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyApzOnC5h1dFvNvOVcGblNDZ3vXbmUWbJc`+`&maxResults=15`);
        setSearchResults(response.data.items);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError('An error occurred while fetching search results. Please try again later.');
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm]);

  // Function to handle showing the book details modal
  const handleShowDetails = (book) => {
    setSelectedBook(book);
  };

  // Function to handle closing the book details modal
  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  return (
    <div className="search-results-page">
      <NavbarTop />
      <div className='searched-head'>
        <h1 className="heading">Showing results for "{searchTerm}"</h1>
      </div>
      <div className="search-results">
        {error && <div>{error}</div>}
        {!error && searchResults.length === 0 && <div>No results found</div>}
        {!error && searchResults.map((book, index) => (
          <Card key={index} onClick={() => handleShowDetails(book)}> {/* Add onClick event to show details */}
            <Card.Img variant="top" src={book.volumeInfo.imageLinks?.thumbnail} />
            <Card.Body>
              <Card.Title>{book.volumeInfo.title}</Card.Title>
              <Card.Text>
                Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}
              </Card.Text>
              
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal for displaying book details */}
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
          <p>
            <strong>Publish Date:</strong>{" "}
            {selectedBook?.volumeInfo.publishedDate
              ? selectedBook?.volumeInfo.publishedDate
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
            className='read'
            href={selectedBook?.volumeInfo.infoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Book
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SearchResultsPage;
