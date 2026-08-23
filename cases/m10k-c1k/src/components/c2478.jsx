import React from 'react';
const LABEL_2478 = 'component_2478';
export function Component2478({ value = 2478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2478, 'data-value': derived.doubled }, children);
}
export default Component2478;
