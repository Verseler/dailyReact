import PropTypes from 'prop-types';

function PropTypesTest(props) {
  return(<>
    <div>{props.name}</div>
    <div>{props.age}</div>
    <div>{props.hobbies}</div>
    {/* <div>{props.message}</div> */}
  </>);
}

PropTypesTest.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.array,
  // message: PropTypes.object
}

PropTypesTest.defaultProps = {
  name: 'kero',
}

export default PropTypesTest;