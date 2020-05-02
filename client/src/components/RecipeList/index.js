import React from "react";
import RecipeListItem from "./RecipeListItem";
import { Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList(props) {

  return (
    <Row>
      <Col size="xs-12">
        <h1>Recipe List</h1>
        <ul className="list-group">
          {props.recipes
            .map((recipe, index) => (<RecipeListItem recipe={recipe} key={index} />))}
        </ul>
      </Col>
    </Row>
  );

  // console.log(children);
  // return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
// function RecipeListItem(props) {
//   return (
//     <li className="list-group-item">
//       <Container>
//         <Row>
//           <Col size="xs-4 sm-2">
//             <Thumbnail src={props.thumbnail} />
//           </Col>
//           <Col size="xs-8 sm-9">
//             <h3>{props.title}</h3>
//             <p>
//               {props.ingredients}
//             </p>
//             <a
//               rel="noreferrer noopener"
//               target="_blank"
//               href={props.href}
//             >
//               Go to recipe!
//             </a>
//           </Col>
//         </Row>
//       </Container>
//     </li>
//   );
// }
