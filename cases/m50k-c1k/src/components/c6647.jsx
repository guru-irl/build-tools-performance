import React from 'react';
const LABEL_6647 = 'component_6647';
export function Component6647({ value = 6647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6647, 'data-value': derived.doubled }, children);
}
export default Component6647;
