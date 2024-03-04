// // Navbartop.js
// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import '../styles/Navbartop.css';
// import SearchResultsPage from './SearchResultsPage';

// function Navbartop() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
//       <Navbar.Brand href="#" className='logoname'>BookHaven</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Navbar.Collapse id="navbarScroll">
//         <Nav
//           className="me-auto my-2 my-lg-0"
//           style={{ maxHeight: '100px' }}
//           navbarScroll
//         >
//           <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
//           <Nav.Link href="#Trending" className="nav-link">Trending</Nav.Link>
//           <Nav.Link href="#RomCom" className="nav-link">RomCom</Nav.Link>
//           <Nav.Link href="#comedy" className="nav-link">Comedy</Nav.Link>
//           <Nav.Link href="#horror" className="nav-link">Horror</Nav.Link>

//         </Nav>
//         <form className="d-flex search-form">
//           <input
//             type="search"
//             placeholder="Search"
//             className="me-2 search-input"
//             aria-label="Search"
//           />
//           <FontAwesomeIcon icon={faSearch} className="search-icon" />
//         </form>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Navbartop;
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/Navbartop.css';

function Navbartop() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to search results page with the search query
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      
      <Navbar.Brand onClick={() => navigate('/')} className='logoname'>BookHaven</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link  href="#home" onClick={() => navigate('/')} className="nav-link">Home</Nav.Link>
          <Nav.Link href="#trending" className="nav-link">Trending</Nav.Link>
          <Nav.Link href="#romcom" className="nav-link">RomCom</Nav.Link>
          <Nav.Link href="#comedy" className="nav-link">Comedy</Nav.Link>
          <Nav.Link href="#horror" className="nav-link">Horror</Nav.Link>
        </Nav>
        <form className="d-flex search-form" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search"
            className="me-2 search-input"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-primary search-button">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbartop;
