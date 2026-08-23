import React from 'react';
const LABEL_2104 = 'component_2104';
export function Component2104({ value = 2104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2104, 'data-value': derived.doubled }, children);
}
export default Component2104;
