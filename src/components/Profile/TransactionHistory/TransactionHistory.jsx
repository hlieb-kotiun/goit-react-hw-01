// import PropTypes from "prop-types";
import css from "../TransactionHistory/TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  console.log(items);

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
          console.log(item.id);
          console.log(item.type);
          console.log(item.amount);
          console.log(item.currency);
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
