import React, {useEffect, useState} from 'react'
import '../Component/Table.css'
import { useLocation } from 'react-router-dom';
import  { useNavigate } from 'react-router-dom';

function Table() {
  const location = useLocation()
  const [state, setLocationState] = useState({FormData})

  //location state
  useEffect (()=>{
    let state = location.state
    setLocationState(state)
  }, [location.state])

  const navigate = useNavigate();
   const handleRowClick = () => {
    navigate('/form');
   }
  return (
    <div className='table-container'>
      <table>
        <thead>
            <tr>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
        {state && (
            <tr onClick={handleRowClick}>
                <td>{state.email}</td>
                <td>{state.username}</td>
                <td>{state.password}</td>
            </tr>
              )}

        </tbody>

      </table>
    </div>
  )
}

export default Table