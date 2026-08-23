import React from 'react';
const LABEL_22542 = 'component_22542';
export function Component22542({ value = 22542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22542, 'data-value': derived.doubled }, children);
}
export default Component22542;
