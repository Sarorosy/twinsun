import "./App.css";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./utils/idb.jsx";
import { Tooltip } from "react-tooltip";
import CustomCursor from "./components/CustomCursor.jsx";
import { CallModalProvider } from "./contexts/CallModalContext";

function App() {
  return (
    <>
      <CustomCursor />
      <CallModalProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </CallModalProvider>
      <Tooltip id="my-tooltip" />
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "border",
          duration: 3000,
          removeDelay: 500,
          style: {
            background: "#161616FF",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </>
  );
}

export default App;
