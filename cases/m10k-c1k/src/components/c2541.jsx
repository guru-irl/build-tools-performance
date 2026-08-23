import React from 'react';
const LABEL_2541 = 'component_2541';
export function Component2541({ value = 2541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2541, 'data-value': derived.doubled }, children);
}
export default Component2541;
