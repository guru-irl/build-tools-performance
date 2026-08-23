import React from 'react';
const LABEL_31936 = 'component_31936';
export function Component31936({ value = 31936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31936, 'data-value': derived.doubled }, children);
}
export default Component31936;
