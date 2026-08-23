import React from 'react';
const LABEL_33874 = 'component_33874';
export function Component33874({ value = 33874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33874, 'data-value': derived.doubled }, children);
}
export default Component33874;
