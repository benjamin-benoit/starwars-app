import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PersonCard from '../../components/PersonCard/PersonCard';
import { fetchPeople } from '../../redux/reducers/peopleSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const PeopleList = () => {
  const people = useAppSelector(state => state.people);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPeople());

    console.log(people);
  }, []);

  const currentPeople = people.data;

  return (
    <>
      {people.loading}
      {people.error && people.error}
      {people && (
        <div>
          <p>
            {currentPeople?.map(person => (
              <>Name: {person.name}</>
            ))}
          </p>
        </div>
      )}
    </>
  );
};

export default PeopleList;
