import React from 'react';
import { Link } from 'react-router-dom';

const TopicList = ({ match, history }) => {

  const fireHistory = () => {
    return history.push(`${match.url}/Topic1`);
  }

  return (
    <div>
      <h3>Topic List View</h3>
      <ul>
        <li>
          <button onClick={fireHistory}
          >Topic 1
          </button>
        </li>
        <li>
          <Link to={`${match.url}/Topic2`}>Topic 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/Topic3`}>Topic 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopicList;
