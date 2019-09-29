import React from "react";


class AddFishForm extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(event){
    event.preventDefault();
    const fish = {
      name: this.name.current.value,
      price: this.price.current.value,
      status: this.status.current.value,
      desc: this.desc.current.value,
      image: this.image.current.value
    }
    this.props.addFish(fish);
  }

  name = React.createRef();
  price = React.createRef();
  status = React.createRef();
  desc = React.createRef();
  image = React.createRef();
 
  render() {
    return (
      <form className="fish-edit" onSubmit={this.handleClick}>

        <input
          type="text"
          required
          placeholder="Name"
          ref={this.name}
        />
        <input
          type="text"
          required
          placeholder="Price"
          ref={this.price}
        />
        <input
          type="text"
          required
          placeholder="Status"
          ref={this.status}
        />
        <textarea
          type="text"
          required
          placeholder="Desc"
          ref={this.desc}
        />
        <input
          type="text"
          required
          placeholder="Image"
          ref={this.image}
        />
        <button type="submit">Go -></button>
      </form>
      
    );
  }
}

export default AddFishForm;
