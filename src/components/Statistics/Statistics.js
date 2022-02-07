import PropTypes from 'prop-types';
import './Statistics.css';
import colorMaker from 'js/colorMaker';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="statistics-title">{title}</h2>}

      <ul className="statistics-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className="statistics-item"
              key={id}
              style={{
                backgroundColor: colorMaker(),
              }}
            >
              <span className="statistics-label">{label}</span>
              <span className="statistics-percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default Statistics;
