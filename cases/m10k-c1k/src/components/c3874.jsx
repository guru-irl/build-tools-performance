import React from 'react';
const LABEL_3874 = 'component_3874';
export function Component3874({ value = 3874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3874, 'data-value': derived.doubled }, children);
}
export default Component3874;
