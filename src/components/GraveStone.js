// a card of your choosing that gets called from Graveyard component inside a map
import React from 'react';
import PropTypes from 'prop-types';

const GraveStone = ({ student }) => (
<li>
  {`${student.firstName} ${student.lastName}`}
</li>
);

GraveStone.propTypes = {
  student: PropTypes.object.isRequired
};

export default GraveStone;
