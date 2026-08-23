import React from 'react';
const LABEL_36874 = 'component_36874';
export function Component36874({ value = 36874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36874, 'data-value': derived.doubled }, children);
}
export default Component36874;
