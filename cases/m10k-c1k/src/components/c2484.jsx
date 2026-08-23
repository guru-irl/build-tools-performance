import React from 'react';
const LABEL_2484 = 'component_2484';
export function Component2484({ value = 2484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2484, 'data-value': derived.doubled }, children);
}
export default Component2484;
