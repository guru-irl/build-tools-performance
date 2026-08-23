import React from 'react';
const LABEL_24617 = 'component_24617';
export function Component24617({ value = 24617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24617, 'data-value': derived.doubled }, children);
}
export default Component24617;
