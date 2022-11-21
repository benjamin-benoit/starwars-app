import { useEffect, useState } from 'react';
import PersonCard from '../../components/PersonCard/PersonCard';
import { fetchPeople } from '../../redux/reducers/peopleSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import * as S from './layout';
import InfiniteScroll from 'react-infinite-scroller';
import { Person } from '../../api/types';

const PeopleList = () => {
  const people = useAppSelector(state => state.people);

  const dispatch = useAppDispatch();

  const [persons, setPersons] = useState<Person[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [peopleCount, setPeopleCount] = useState(0);

  const fetchData = () => {
    console.log('fetchdata', pageNumber, people.data?.previous);
    if (people.data?.previous && persons.length === 0) {
      console.log('page 1');
      setPersons(people.data?.results);
      setPeopleCount(people.data?.count);
      setPageNumber(pageNumber + 1);
    } else if (pageNumber !== 1 && people.data?.next !== null && people.data?.results) {
      console.log('page ', pageNumber);
      dispatch(fetchPeople(`/?page=${pageNumber}`));
      setPersons([...persons, ...(people.data?.results ?? null)]);
    }
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    dispatch(fetchPeople('/'));
  }, []);

  // const currentPeople = people.data;

  return (
    <>
      {/* {people.loading}
      {people.error && people.error} */}
      {/* <S.Info /> */}
      {people.data && (
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchData}
          hasMore={persons.length <= people.data.count}
          loader={<>Load</>}>
          <S.Grid>
            {persons
              ? persons?.map((person: Person) => (
                  <PersonCard key={person?.id} name={person?.name} />
                ))
              : null}
          </S.Grid>
        </InfiniteScroll>
      )}
    </>
  );
};

export default PeopleList;
