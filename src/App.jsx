import './App.css'
import { XFollowCard } from './Components/XFollowCard.jsx';

const users = [
  {
    id: 1,
    name:'One Random Guy',
    userName:'kikobeats',
  },

  {
    id: 2,
    name:'María Alejandra Requena',
    userName:'MRequenaoficial',
  },

  {
    id: 3,
    name:'Jose Rafael Briceño',
    userName:'profesorbriceno',
  },

  {
    id: 4,
    name:'Luis Chataing',
    userName:'luisChataing',
  }
]


export function App() {
  return (
    <div className='App'>
        {users.map(user => {
          const { id, userName, name, isFollowing } = user
          return (
            <XFollowCard
              id={id} 
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </XFollowCard>      
          )
        })
      }  
    </div>
  )
}




// export default App;