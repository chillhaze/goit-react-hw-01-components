import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr className={css.tableRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(item => {
        const { id, amount, type, currency } = item;
        let itemIdx = items.indexOf(item);
        return (
          <tbody className={css.tableBody} key={id}>
            <tr
              className={css.tableRow}
              style={{
                backgroundColor: `${
                  itemIdx % 2 === 0 ? '#fff' : 'rgb(168 207 204 / 24%)'
                }`,
              }}
            >
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
