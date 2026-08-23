import React from 'react';
const LABEL_15918 = 'component_15918';
export function Component15918({ value = 15918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15918, 'data-value': derived.doubled }, children);
}
export default Component15918;
