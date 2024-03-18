import React, { Component } from 'react'
import Garage from './components/Garage'
import AddCar from './components/AddCar'
import "./App.css"

class App extends Component {
  static my_car_seq = 4
  state = {
    cars: [
      { brand: "Honda", model: "Civic", color: "green", year: 2020, hybrid: true, id: 1 },
      { brand: "Ferrari", model: "Testa Rossa", color: "red", year: 2023, id: 2 },
      { brand: "Chevrolet", model: "Cicalvaliervic", color: "orange", year: 2024, id: 3 }
    ]
  }
  deleteCar = (_id) => {
    const new_cars = this.state.cars.filter(car => car.id != _id)
    this.setState({
      cars: new_cars
    })
  }
  addCar = (_car) => {
    // apply the id to car (use my_car_seq)
    const new_cars = [...this.state.cars, { ..._car, id: App.my_car_seq++ }]
    this.setState({
      cars: new_cars
    })
  }
  render() {
    // create component called HelloWolrd
    // inside <h1>Hello world!<h1> in green
    // line #10 <HelloWorld />
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Garage</h1>
          <AddCar add_car={this.addCar} />
          <Garage cars={this.state.cars} delete_car={this.deleteCar} />
        </header>
      </div>
    );
  }
}

export default App;
