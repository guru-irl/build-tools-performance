import React from 'react';
const LABEL_32617 = 'component_32617';
export function Component32617({ value = 32617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32617, 'data-value': derived.doubled }, children);
}
export default Component32617;
