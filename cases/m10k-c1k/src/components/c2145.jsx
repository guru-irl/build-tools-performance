import React from 'react';
const LABEL_2145 = 'component_2145';
export function Component2145({ value = 2145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2145, 'data-value': derived.doubled }, children);
}
export default Component2145;
