import Proptypes from 'prop-types';
import CardItem from './CardItem';

const CardList = ({ monsters }) => {
  return (
    <div className="container grid gap-10 mx-auto text-3xl font-medium text-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {monsters.map((monster) => {
        return <CardItem key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

CardList.propTypes = {
  monsters: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default CardList;
