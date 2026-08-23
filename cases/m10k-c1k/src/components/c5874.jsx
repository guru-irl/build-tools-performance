import React from 'react';
const LABEL_5874 = 'component_5874';
export function Component5874({ value = 5874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5874, 'data-value': derived.doubled }, children);
}
export default Component5874;
