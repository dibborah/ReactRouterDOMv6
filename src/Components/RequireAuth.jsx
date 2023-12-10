
const RequireAuth = ({children}) => {
    const loggedIn = true;
    if(loggedIn){// Can't write directly
       return {children}
    }
  return (
    <div>

    </div>
  )
}

export default RequireAuth;