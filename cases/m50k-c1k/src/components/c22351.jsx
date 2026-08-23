import React from 'react';
const LABEL_22351 = 'component_22351';
export function Component22351({ value = 22351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22351, 'data-value': derived.doubled }, children);
}
export default Component22351;
