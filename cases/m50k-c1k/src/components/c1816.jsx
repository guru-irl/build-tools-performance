import React from 'react';
const LABEL_1816 = 'component_1816';
export function Component1816({ value = 1816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1816, 'data-value': derived.doubled }, children);
}
export default Component1816;
