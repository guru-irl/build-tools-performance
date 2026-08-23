import React from 'react';
const LABEL_39246 = 'component_39246';
export function Component39246({ value = 39246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39246, 'data-value': derived.doubled }, children);
}
export default Component39246;
