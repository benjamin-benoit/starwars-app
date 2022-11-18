import { useQuery } from '@tanstack/react-query';
import swapiService from '../../api/swapi';
import PersonCard from '../../components/PersonCard/PersonCard';

const PeopleList = () => {
  const { data, error, isLoading } = useQuery(['getPeople'], async () => {
    return await swapiService.getPeople();
  });

  return (
    <>
      {isLoading ? (
        <>Chargement des produits en cours...</>
      ) : (
        data && data.map(person => <PersonCard key={person.id} name={person.name} />)
      )}
    </>
  );
};

export default PeopleList;
