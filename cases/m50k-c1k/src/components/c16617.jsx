import React from 'react';
const LABEL_16617 = 'component_16617';
export function Component16617({ value = 16617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16617, 'data-value': derived.doubled }, children);
}
export default Component16617;
