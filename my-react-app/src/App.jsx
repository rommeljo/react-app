
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './students.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';

function App() {
 
  return(
    <>
    <Header/>
    <Footer></Footer>
    <Food/>
    <Card></Card>
    <Button/>
    <Student name="Spongebob" age={30} isstudent={true}/>
    <Student/>
    <UserGreeting isLoggedIn={true} username="Stater"/>
    <List></List>
    </>
  );
}

export default App
