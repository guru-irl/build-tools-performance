import React from 'react';
const LABEL_24874 = 'component_24874';
export function Component24874({ value = 24874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24874, 'data-value': derived.doubled }, children);
}
export default Component24874;
