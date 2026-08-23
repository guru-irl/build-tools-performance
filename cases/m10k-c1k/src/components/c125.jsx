import React from 'react';
const LABEL_125 = 'component_125';
export function Component125({ value = 125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_125, 'data-value': derived.doubled }, children);
}
export default Component125;
