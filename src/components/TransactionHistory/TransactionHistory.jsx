// import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={css.text}>{item.type}</td>
              <td className={css.text}>{item.amount}</td>
              <td className={css.text}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// TransactionHistory.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default TransactionHistory;
