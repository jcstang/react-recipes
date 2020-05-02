import React from "react";
import Input from "../Input";
import Button from "../Button";
import { Container, Row, Col } from "../Grid";

export function RecipeSearch(props) {
  return (<Row>
    <Col size="md-12">
      <form>
        <Container>
          <Row>
            <Col size="xs-9 sm-10">
              <Input
                name="recipeSearch"
                value={props.state.recipeSearch}
                onChange={props.handleInputChange}
                placeholder="Search For a Recipe"
              />
            </Col>
            <Col size="xs-3 sm-2">
              <Button
                onClick={props.handleFormSubmit}
                type="success"
                className="input-lg"
              >
                Search
              </Button>
            </Col>
          </Row>
        </Container>
      </form>
    </Col>
  </Row>)
}
