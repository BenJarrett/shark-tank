// a card of your choosing that gets called from the SharkTank component inside a map. //

import React from 'react';
import PropTypes from 'prop-types';

const LiveStudent = ({ student }) => (
<li>
  {`${student.firstName} ${student.lastName}`}
</li>
);

LiveStudent.propTypes = {
  student: PropTypes.object.isRequired
};

export default LiveStudent;
