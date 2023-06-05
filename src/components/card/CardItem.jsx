import PropTypes from 'prop-types';

const CardItem = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div
      key={id}
      className="bg-cyan-400/40 min-h-min hover:scale-105 rounded-xl lg:p-10"
    >
      <div className="flex items-center justify-center">
        <img src={`https://robohash.org/${id}?set=set2/`} alt={name} />
      </div>
      <h1 className="mt-5 text-xl font-bold">{name}</h1>
      <p className="mt-5 text-sm">{email}</p>
    </div>
  );
};

CardItem.propTypes = {
  monster: PropTypes.object.isRequired,
};

export default CardItem;
