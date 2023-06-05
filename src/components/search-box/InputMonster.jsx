import PropTypes from 'prop-types';

const InputMonster = ({ onChangeHandler, placeholder }) => {
  return (
    <div className="flex justify-center mx-auto mt-10 mb-10 rounded-md">
      <input
        type="search"
        className="p-2 rounded-md sm:w-40 md:w-60 lg:w-80 xl:w-96"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

InputMonster.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputMonster;
