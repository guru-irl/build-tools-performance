import React from 'react';
const LABEL_32874 = 'component_32874';
export function Component32874({ value = 32874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32874, 'data-value': derived.doubled }, children);
}
export default Component32874;
