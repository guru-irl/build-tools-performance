import React from 'react';
const LABEL_21874 = 'component_21874';
export function Component21874({ value = 21874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21874, 'data-value': derived.doubled }, children);
}
export default Component21874;
