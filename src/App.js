import "./index.css";
import Card from "./Card";
import contacts from "./contacts";

function App() {
  return (
    <div>
     <h1 className="text-4xl font-bold text-center text-gray-700 my-10 mx-6">
        My Contacts
      </h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
        />
    </div>
  );
}

export default App;
