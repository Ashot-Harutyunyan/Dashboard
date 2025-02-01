import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { scheduleDataFetch } from "./redux/scheduleDataSlice"
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import TransitionsState from './components/TransitionsState/TransitionsState'
import DueDate from './components/DueDate/DueDate'
import CycleTime from './components/CycleTime/CycleTime'
import TransitionStateSecond from './components/TransitionStateSecond/TransitionStateSecond'
import RecentTransitions from "./components/RecentTransitions/RecentTransitions"
import RecentTasksToReview from "./components/RecentTasksToReview/RecentTasksToReview"
import TasksApprovalRate from './components/TasksApprovalRate/TasksApprovalRate'


function App() {

  const dispatch = useDispatch()

  const data = useSelector(({scheduleData}) => scheduleData.data)
  const status = useSelector(({scheduleData}) => scheduleData.status)
  const error = useSelector(({scheduleData}) => scheduleData.error)

  useEffect(() => {
    dispatch(scheduleDataFetch())
  }, [dispatch])

  return (<>
    <Header/>
      {status === 'loading' && <h2 className='loading'>Loading...</h2>}
      {status === 'failed' && <p className='error'>Error {error}</p>}
      {status === "succeeded" && data && <Main>
        <section className="app-section">
          {data.TransitionsState && <TransitionsState data={data.TransitionsState} />}
          {data.DueDateOne && <DueDate data={data.DueDateOne} />}
        </section>
        <section className="app-section">
          {data.CycleTime && <CycleTime data={data.CycleTime} />}
        </section>
        <section className="app-section">
          {data.DueDateTwo && <DueDate data={data.DueDateTwo} />}
          {data.TransitionStateSecond && <TransitionStateSecond data={data.TransitionStateSecond} />}
        </section>
        <section className="app-section">
          <RecentTransitions />
        </section>
        <section className="app-section">
          <RecentTasksToReview />
        </section>
        {data.TasksApprovalRate && <TasksApprovalRate data={data.TasksApprovalRate} />}
      </Main>}
</>)
}

export default App