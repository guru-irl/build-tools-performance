import React from 'react';
const LABEL_2333 = 'component_2333';
export function Component2333({ value = 2333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2333, 'data-value': derived.doubled }, children);
}
export default Component2333;
