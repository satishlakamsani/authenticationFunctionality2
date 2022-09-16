// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LogOutButton = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button type="button" className="logout-button" onClick={onClickLogOut}>
      Logout
    </button>
  )
}
export default withRouter(LogOutButton)
