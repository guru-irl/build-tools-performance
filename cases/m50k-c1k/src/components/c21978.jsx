import React from 'react';
const LABEL_21978 = 'component_21978';
export function Component21978({ value = 21978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21978, 'data-value': derived.doubled }, children);
}
export default Component21978;
