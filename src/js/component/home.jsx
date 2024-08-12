import React from "react";
import ToDoList from "./ToDoList.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<><div className="d-flex flex-column min-vh-100">
			<h1 className="d-flex flex-column align-items-center justify-content-center">todos</h1>
			<ToDoList/>
			<footer className="footer mt-auto py-3 bg-light text-center">
                <div className="container">
                    <span className="text-muted">© 2024 Your Company. All rights reserved.</span>
                </div>
            </footer>			
		</div>
		</>
	);
};

export default Home;
