import React from 'react';
const LABEL_21533 = 'component_21533';
export function Component21533({ value = 21533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21533, 'data-value': derived.doubled }, children);
}
export default Component21533;
