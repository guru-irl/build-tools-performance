import React from 'react';
const LABEL_28093 = 'component_28093';
export function Component28093({ value = 28093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28093, 'data-value': derived.doubled }, children);
}
export default Component28093;
