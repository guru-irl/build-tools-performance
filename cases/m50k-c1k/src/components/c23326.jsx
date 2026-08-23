import React from 'react';
const LABEL_23326 = 'component_23326';
export function Component23326({ value = 23326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23326, 'data-value': derived.doubled }, children);
}
export default Component23326;
