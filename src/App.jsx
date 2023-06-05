import { useState, useEffect } from 'react';
import CardList from './components/card/CardList';
import InputMonster from './components/search-box/InputMonster';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    setFilteredMonster(newFilteredMonster);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className="w-full min-h-screen pb-12 mx-auto bg-gradient-to-r from-cyan-800 to-blue-950">
      <h1 className="pt-10 text-4xl italic font-bold text-center md:text-5xl lg:text-7xl text-cyan-400 font-['Bigelow_Rules']">
        Monster {searchField}
      </h1>
      <InputMonster
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
      />
      {filteredMonster.length === 0 ? (
        <div>
          <h1 className="text-3xl font-bold text-center text-cyan-400">
            Monster Not Found
          </h1>
        </div>
      ) : (
        <CardList monsters={filteredMonster} />
      )}
    </div>
  );
};

export default App;
