import React from 'react';
const LABEL_32955 = 'component_32955';
export function Component32955({ value = 32955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32955, 'data-value': derived.doubled }, children);
}
export default Component32955;
