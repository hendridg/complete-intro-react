import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await response.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    const { name, animal, description, breed, city, state, loading } =
      this.state;
    if (loading) {
      return <h2>Is Loading...</h2>;
    }
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
