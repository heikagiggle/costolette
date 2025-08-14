/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navigation.css";
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'

const Navigation = ({handleInputChange, query}) => {
  return (
    <div className="nav">
      <div className="nav-container">
      <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search here"
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons"/>
        </a>

        <a href="#">
          <AiOutlineShoppingCart className="nav-icons"/>
        </a>
        <a  href="#">
          <AiOutlineUserAdd className="nav-icons"/>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
