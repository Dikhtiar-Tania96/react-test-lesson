import { useDispatch, useSelector } from "react-redux"
import { actionDeposit, actionWithdraw } from "../store/store"

const HomePage = () => {
const balanceValue = useSelector((state)=> state.balance.value)
const dispatch = useDispatch()


const handleDeposit = () => {
  dispatch(actionDeposit(100))
}

const handleWithdraw = () => {
  dispatch(actionWithdraw(10))
}

  return (
    <div>HomePage
      <hr/>
      Balance: {balanceValue}
      <hr/>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  )
}

export default HomePage