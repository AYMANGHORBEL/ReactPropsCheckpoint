import "./App.css";
import Profile from "./profile/Profile";

function App() {
  let fullName = "Ayman";
  let profession = "Full-Stack js Developer";
  let bio = "Hello , my name is John Doe and i like web development";
  let handleName = (x) => alert(`this name is ${x}`);
  return (
    <div className="App">
      <Profile
        name={fullName}
        bio={bio}
        pro={profession}
        handleName={handleName}
      >
        <img
          src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
          alt=""
        />
      </Profile>
    </div>
  );
}

export default App;
