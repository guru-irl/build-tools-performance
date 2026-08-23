import React from 'react';
const LABEL_26767 = 'component_26767';
export function Component26767({ value = 26767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26767, 'data-value': derived.doubled }, children);
}
export default Component26767;
