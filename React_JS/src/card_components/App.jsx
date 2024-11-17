import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Food from './Food.jsx'
import Student from './Student.jsx'
import UserGreeting from './userGreeting.jsx'
import List from './List.jsx'
import Button from './Button/Button.jsx'

function App() {

  // Array of fruits
  const fruits = [
    {id:1,name:"Apple",cal:95},
    {id:2,name:"Banana",cal:45},
    {id:3,name:"PineApple",cal: 105},
    {id:4,name:"Black Berry",cal:159},
    ];

    const vegetable = [
      {id:1,name:"Tamato",cal:95},
      {id:2,name:"Kosamburi",cal:45},
      {id:3,name:"Cucumber",cal: 105},
      {id:4,name:"Onion",cal:159},
      ];
   return(
    <>
    <Header></Header>
    <Card/>
    <Button/>
    <Student name="Nandy" age={13} isStudent={true}/>
    <Student name="Nancy" age={30} isStudent={false}/>

    {/* Default Props */}
    <Student name="John"/>

    {/* Conditional Rendering */}
    <UserGreeting isLoggedIn={true} username="Nandy"/>
    <UserGreeting isLoggedIn={false}/>

    <Food></Food>

    {/* List */}
    {
    fruits.length > 0 && <List items={fruits} category="Fruits"/>
    }
    {
      vegetable.length > 0 && <List items={vegetable} category="Vegetable"/>
    }

    <Footer></Footer>
    </>
   );
}

export default App
