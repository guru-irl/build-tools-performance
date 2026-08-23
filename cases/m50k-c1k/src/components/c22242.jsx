import React from 'react';
const LABEL_22242 = 'component_22242';
export function Component22242({ value = 22242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22242, 'data-value': derived.doubled }, children);
}
export default Component22242;
