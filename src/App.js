import { useState, useEffect } from "react";
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Employees from './Employees';
// import { Router } from "react-router-dom";
import { HashRouter as Router,Routes, Route } from "react-router-dom";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";


function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem("TeamB")) || "TeamB");

  const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) || [
      {
          id: 1,
          fullName: "Omkar Kanase",
          designation: "JavaScript Developer",
          gender: "male",
          teamName: "TeamA"
        }, 
        {
          id: 2,
          fullName: "Dipeka Padukon",
          designation: "Node Developer",
          gender: "female",
          teamName: "TeamA"
        },
        {
          id: 3,
          fullName: "Nora Fatie",
          designation: "Java Developer",
          gender: "female",
          teamName: "TeamA"
        },
        {
          id: 4,
          fullName: "Messi Shinde",
          designation: "React Developer",
          gender: "male",
          teamName: "TeamB"
        },
        {
          id: 5,
          fullName: "Harry Potter",
          designation: "DotNet Developer",
          gender: "male",
          teamName: "TeamB"
        },
        {
          id: 6,
          fullName: "Aishwarya Rai",
          designation: "SQL Server DBA",
          gender: "female",
          teamName: "TeamB"
        },
        {
          id: 7,
          fullName: "Rutik Pawar",
          designation: "Angular Developer",
          gender: "male",
          teamName: "TeamC"
        },
        {
          id: 8,
          fullName: "Priya Nalavde",
          designation: "API Developer",
          gender: "female",
          teamName: "TeamC"
        },
        {
          id: 9,
          fullName: "Kate Winslate",
          designation: "C++ Developer",
          gender: "female",
          teamName: "TeamC"
        },
        {
          id: 10,
          fullName: "Ron Wizle",
          designation: "Python Developer",
          gender: "male",
          teamName: "TeamD"
        },
        {
          id: 11,
          fullName: "Snapes HalfBooldPrince",
          designation: "Vue Developer",
          gender: "male",
          teamName: "TeamD"
        },
        {
          id: 12,
          fullName: "David McMohn",
          designation: "Graphic Designer",
          gender: "male",
          teamName: "TeamD"
        },
        {
          id: 13,
          fullName: "Mohan Jadhav",
          designation: "AWS & System Managment",
          gender: "male",
          teamName: "TeamD"
        },
        {
          id: 14,
          fullName: "Shrab Ganghi",
          designation: "Machine Learning",
          gender: "male",
          teamName: "TeamA"
        },
        {
          id: 15,
          fullName: "Vinod Kamble",
          designation: "Data Analysis",
          gender: "male",
          teamName: "TeamC"
        }
  ]);

  useEffect(() => {
    localStorage.setItem('employeeList',JSON.stringify(employees));
  },[employees]);

  useEffect(() =>{
    localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));
  } ,[selectedTeam]);

  function handleTeamSelectionChange(event){
      setTeam(event.target.value);
      // console.log(event.target.value);
  }

  function handleEmployeeCardClick(event){
      const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) 
      ?(employee.teamName === selectedTeam)?{...employee,teamName: ''}: {...employee,teamName: selectedTeam}: employee);

      setEmployees(transformedEmployees);     
  }

  return (
    <div className="App">
      <Router basename="/">
        <Nav />
        <Header selectedTeam={selectedTeam}
          teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
        />
        <Routes>
          <Route path='/' element={<Employees employees={employees}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />} >

          </Route>
          <Route path = "/GroupedTeamMembers" element={<GroupedTeamMembers employees={employees}
                selectedTeam={selectedTeam} 
                setTeam={setTeam} />} ></Route>
          <Route path="*" element={<NotFound/>}>

          </Route>
        </Routes>
          
        <Footer />
      </Router>





    </div>
  );
}

export default App;

