import React from 'react';
const LABEL_16874 = 'component_16874';
export function Component16874({ value = 16874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16874, 'data-value': derived.doubled }, children);
}
export default Component16874;
