import PropTypes from "prop-types";

const Navigation = ({ onPageChange, pages }) => {
  return (
    <header className="header mt-4">
      <h2 className="text-muted">Database</h2>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link`}
              onClick={() => onPageChange("Homepage")}
            >
              Edit or View Array
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link`}
              onClick={() => onPageChange("Postpage")}
            >
              Posts
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  pages: PropTypes.object.isRequired,
};

export default Navigation;
