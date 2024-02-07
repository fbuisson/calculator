import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOperations } from '../LocalForage/LocalForage';

const Jour = () => {
  const [operations, setOperations] = useState([]);
  const { jourId } = useParams();

  useEffect(() => {
    const fetchOperations = async () => {
      const data = await getOperations(jourId);
      setOperations(data);
    };
    fetchOperations().catch(console.error);
  }, [jourId]);

  function getJour(id) {
    const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    return jours[id];
  }

  return (
    <>
      <h2 className="mt-8 text-4xl font-bold  text-gray-900 text-center">Les calculs du {getJour(jourId)}</h2>
      <div className="flex justify-center align-center">
        <ul className="max-w-md mt-8 space-y-1 text-gray-700 list-disc list-inside">
          {operations.map((operation, key) => (
            <li key={key}>{operation}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Jour;
