import { useDispatch, useSelector } from 'react-redux'
// TODO: import useAuth0 function
import { useAuth0 } from '@auth0/auth0-react'
import { updateLoggedInUser } from './actions/loggedInUser'

// eslint-disable-next-line no-unused-vars
export function useCacheUser() {
  const dispatch = useDispatch()
  const tokenInRedux = useSelector((state) =>
    Boolean(state.loggedInUser?.token)
  )

  // TODO: call the useAuth0 and destructure:
  // isAuthenticated, getAccessTokenSilently and user
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  if (isAuthenticated && !tokenInRedux) {
    try {
      // TODO: call getAccessTokenSilently and replace the token string below
      getAccessTokenSilently()
        .then((tokenValue) => {
          const userToSave = {
            auth0Id: user?.sub,
            email: user?.email,
            token: tokenValue,
          }
          dispatch(updateLoggedInUser(userToSave))
        })
        .catch((e) => e.message)
    } catch (err) {
      console.error(err)
    }
  }
}
