import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../redux/balanceSlice';
import LangSwither from './LangSwitcher';

const App = () => {
  const dispatch = useDispatch();
  const balans = useSelector(state => state.balans.value);
  const lang = useSelector(state => state.locale.lang);
  return (
    <div>
      <LangSwither />
      <p>Current lang: {lang}</p>
      <hr />
      <p>Balance: {balans} credits</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit 10 credits</button>
      <button onClick={() => dispatch(withdraw(5))}>Withdraw 5 credits</button>
    </div>
  );
};

export default App;
