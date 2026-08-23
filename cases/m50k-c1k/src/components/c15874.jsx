import React from 'react';
const LABEL_15874 = 'component_15874';
export function Component15874({ value = 15874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15874, 'data-value': derived.doubled }, children);
}
export default Component15874;
