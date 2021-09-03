import { Link } from 'react-router-dom';
import './Home.css';
const HomeScreen = ({ docId, setDocId, email, setEmail }) => {
  const inputHandler = (e) => {
    setDocId(e.target.value);
  };
  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
  }
  return (
    <div className="home-container">
      <div className="home-card">
        <p>Welcome to Colaborate</p>
        <input
          value={docId}
          onChange={inputHandler}
          placeholder="Document ID of existing document"
          type="text"
        />
        <input
          value={email}
          onChange={inputEmailHandler}
          placeholder="Enter your registered email"
          type="text"
        />
        <div className="home-btns">
          <Link to={docId && `/rooms/documents/${docId}`}>
            <button>Open Resume</button>
          </Link>
          <Link to="/rooms">
            <button>New Resume</button>
          </Link>
        </div>
        <div className="home-instruction">
          <p>Resume Id can be found in the URL following </p>
          <p>/document/ (or)</p>
          <p>Click on new document</p>
        </div>
        <h4 className="home-footer">
          Google Docs Clone create your resume -{' '}
        </h4>
      </div>
    </div>
  );
};

export default HomeScreen;
