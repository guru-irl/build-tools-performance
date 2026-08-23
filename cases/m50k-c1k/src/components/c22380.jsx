import React from 'react';
const LABEL_22380 = 'component_22380';
export function Component22380({ value = 22380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22380, 'data-value': derived.doubled }, children);
}
export default Component22380;
