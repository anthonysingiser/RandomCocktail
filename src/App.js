import './App.css';
import GetRandomCocktail from './GetRandomCocktail';

export default function DateAndTime() {

  const currentDate = new Date();
  const currentDateString = currentDate.toLocaleDateString()
  const currentHour = currentDate.getHours()

  return (
      <div>
          <p>Date : {currentDateString}</p>
          <p>Hour : {currentHour}</p>
          <GetRandomCocktail currentHour = {currentHour}/>
      </div>
      )
}