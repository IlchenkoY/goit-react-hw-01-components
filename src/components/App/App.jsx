import Profile from '../Profile/Profile';
import Statistics from '../Statistic/StatisticList';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import s from './App.module.css';
import user from '../../data/user.json';
import statistic from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

export default function App() {
  return (
    <div className={s.container}>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={statistic} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
