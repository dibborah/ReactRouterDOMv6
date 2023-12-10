// step 1
// import 4 things

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home, About, Contact, Error, Posts,PostDetail } from "./Pages";
import RootLayout from "./layouts/RootLayout";
import RequireAuth from "./Components/RequireAuth";

// Step 2: create router// From the imported  methods 

const router = createBrowserRouter(
  createRoutesFromElements(
    // UI ka code jo main har child ke sath share karna chahta hu
    // Share to ho jaega code lekin child component render nhi honge
    // To hame outlet component use karna hoga child components ko dikhane ke liye
    <Route path="/" element={<RootLayout />} >
      {/* Home index hain mera matlab path="/" aane se index file dikhega hi dikhega */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="contact" element={<Contact />} />
      <Route path="posts" element={<RequireAuth><Posts /></RequireAuth>} />

      <Route path="posts/:id" element={<PostDetail />} />
      {/* colon(:) id => Variable path and the variable name can be set any name not just id 
      // id is something we kept for our convenience in the name convension
      // But the variable name in the varible path can be of anything, let's say x,y,z 1,2,3 abc or bjcsvb even jiberish
      matlab : colon ke baad jo v ho 1,2,3 x,y,z wo sab ko match karega */}
      <Route path="*" element={<Error />} />
    </Route >
  ));

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
