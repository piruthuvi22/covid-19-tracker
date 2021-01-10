import { ToastContainer, toast } from "react-toastify";

const Notification = () => {
  return (
    <div>
      {window.innerHeight > window.innerWidth
        ? alert("Please use Landscape!")
        : null}
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
      />
    </div>
  );
};

export default Notification;
