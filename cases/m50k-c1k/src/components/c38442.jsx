import React from 'react';
const LABEL_38442 = 'component_38442';
export function Component38442({ value = 38442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38442, 'data-value': derived.doubled }, children);
}
export default Component38442;
