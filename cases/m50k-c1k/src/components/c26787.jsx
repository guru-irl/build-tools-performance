import React from 'react';
const LABEL_26787 = 'component_26787';
export function Component26787({ value = 26787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26787, 'data-value': derived.doubled }, children);
}
export default Component26787;
