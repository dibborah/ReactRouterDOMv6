import { Outlet, Link, NavLink } from "react-router-dom";
import styles from "./RootLayout.module.css";

//Link => It is an upgraded version of the anchor tag and also itself internally anchor tag
//It is upgraded in a sense that when we change links the pages is not reloaded unlike the anchor tag

//NavLink : It is an upgraded version of the Link tag
//In NavLink an active class is added to the current clicked link
// So it is named as active class
// Having an active class gives the advantage of adding an style in the click link

// NavLink also allows to add any className to the active link want with the obj it has
// The obj it provides has an isActive property which we use to add any class we wish 
// If we donot add a class than bydefault active class will be there(added)

const RootLayout = () => {
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            {/* Link is internally ANCHOR TAG(<a></a>tag) */}
            <NavLink to="/" className={({isActive})=>{
              return isActive ? styles.isActiveNav : null;
            }}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={(obj)=>{
              return obj.isActive ? styles.isActiveNav : null;
            }}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={(obj)=>{
              return obj.isActive ? styles.isActiveNav : null;
            }}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/posts" className={(obj)=>{
              return obj.isActive ? styles.isActiveNav : null;
            }}>Posts</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout;