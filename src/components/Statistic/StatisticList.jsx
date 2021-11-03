import PropTypes from 'prop-types';
import getRandomColor from './randomColor';
import s from './Statistic.module.css';

export default function Statistic({ title, stats }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={s.label}>{label} </span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string.isRequired,
    }),
  ),
};
