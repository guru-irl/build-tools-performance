import React from 'react';
const LABEL_25453 = 'component_25453';
export function Component25453({ value = 25453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25453, 'data-value': derived.doubled }, children);
}
export default Component25453;
