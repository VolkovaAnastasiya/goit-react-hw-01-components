import PropTypes from 'prop-types';
import './TransactionHistory.css';

function TransactionHistory({ transactions }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="title">Type</th>
          <th className="title">Amount</th>
          <th className="title">Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }, indef) => (
          <tr
            className="body"
            key={id}
            style={{
              background: indef % 2 === 0 ? '#fff' : 'rgb(212, 241, 241)',
            }}
          >
            <td className="string">{type}</td>
            <td className="string">{amount}</td>
            <td className="string">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
