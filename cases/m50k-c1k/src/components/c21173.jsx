import React from 'react';
const LABEL_21173 = 'component_21173';
export function Component21173({ value = 21173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21173, 'data-value': derived.doubled }, children);
}
export default Component21173;
