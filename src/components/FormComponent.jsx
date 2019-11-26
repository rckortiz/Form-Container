import React from 'react'

const FormComponent = props => {
  return (
    <main>
      <h1>Sample Form</h1>
      <form className="inputForm">
        <input
          className="text"
          onChange={props.handleChange}
          name="firstName"
          placeHolder="First Name"
          value={props.firstName}
        />
        <br />
        <input
          className="text"
          onChange={props.handleChange}
          name="age"
          placeHolder="Age"
          value={props.age}
        />
        <br />
        <br />
        <label>
          <input
            className="radiobutton"
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === 'male'}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label>
          <br />
          <input
            className="radiobutton"
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === 'female'}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <select
          className="destination-input"
          onChange={props.handleChange}
          name="destination"
          value={props.destination}
        >
          <option value=""> -- Please Choose a Destination -- </option>
          <option value="Thailand"> Thailand </option>
          <option value="Japan"> Japan </option>
          <option value="Brazil"> Brazil </option>
        </select>
        <br />
        <br />
        <label className="restrictions-title"> Dietary Restrictions: </label>
        <br />
        <div className="restrictions">
          <input
            type="checkbox"
            name="nutsFree"
            onChange={props.handleChange}
            checked={props.nutsFree}
          />
          <span>Nuts Free</span>
          <br />
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.isVegan}
          />
          <span>Vegan</span>
        </div>
        <button className="submit"> Submit </button>
      </form>
      <hr />
      <div className="entered-info">
        <h2>Entered information:</h2>
        <p>
          Your name: {props.firstName} {props.LastName}
        </p>
        <p> Your age: {props.age} </p>
        <p> Your gender: {props.gender}</p>
        <p> Your Destination: {props.destination}</p>
        <p> Your dietary restrictions: </p>
        <div className="restrictions">
          <span>**Nuts Free : {props.nutsFree ? 'Yes' : 'No'}</span> <br />
          <span>**Lactose Free : {props.lactoseFree ? 'Yes' : 'No'}</span>{' '}
          <br />
          <span>**Vegan Meal : {props.isVegan ? 'Yes' : 'No'} </span>
        </div>
      </div>
    </main>
  )
}

export default FormComponent
