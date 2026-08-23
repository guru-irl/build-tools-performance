import React from 'react';
const LABEL_2065 = 'component_2065';
export function Component2065({ value = 2065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2065, 'data-value': derived.doubled }, children);
}
export default Component2065;
