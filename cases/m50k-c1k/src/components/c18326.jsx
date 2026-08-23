import React from 'react';
const LABEL_18326 = 'component_18326';
export function Component18326({ value = 18326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18326, 'data-value': derived.doubled }, children);
}
export default Component18326;
