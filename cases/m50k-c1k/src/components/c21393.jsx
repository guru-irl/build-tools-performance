import React from 'react';
const LABEL_21393 = 'component_21393';
export function Component21393({ value = 21393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21393, 'data-value': derived.doubled }, children);
}
export default Component21393;
