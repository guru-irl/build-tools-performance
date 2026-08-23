import React from 'react';
const LABEL_2389 = 'component_2389';
export function Component2389({ value = 2389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2389, 'data-value': derived.doubled }, children);
}
export default Component2389;
