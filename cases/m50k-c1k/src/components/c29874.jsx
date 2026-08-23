import React from 'react';
const LABEL_29874 = 'component_29874';
export function Component29874({ value = 29874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29874, 'data-value': derived.doubled }, children);
}
export default Component29874;
