import React from 'react';
const LABEL_2650 = 'component_2650';
export function Component2650({ value = 2650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2650, 'data-value': derived.doubled }, children);
}
export default Component2650;
