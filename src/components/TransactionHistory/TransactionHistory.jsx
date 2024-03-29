import css from './TransactionHistory.module.css'
export default function TransactionHistory({ items }) {
    return (
  <table className={css.border}>
  <thead className={css.head}>
    <tr>
      <th className={css.elem}>Type</th>
      <th className={css.elem}>Amount</th>
      <th className={css.elem}>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map((item) => {
                    return <tr key={item.id}>
                    <td className={css.elem}>{item.type}</td>
                    <td className={css.elem}>{item.amount}</td>
                    <td className={css.elem}>{item.amount}</td>
    </tr>})}
   
  </tbody>
</table>

);
}