import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import API from "./utils/API";
import { RecipeList } from "./components/RecipeList";
import { RecipeSearch } from "./components/RecipeSearch";
import { Container } from "./components/Grid";

class App extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => {
        console.log(res.data);
        this.setState({ recipes: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <RecipeSearch
            state={this.state}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit} />

          <RecipeList recipes={this.state.recipes} />

        </Container>
      </div>
    );
  }
}

export default App;
