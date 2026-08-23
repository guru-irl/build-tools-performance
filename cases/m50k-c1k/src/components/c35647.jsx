import React from 'react';
const LABEL_35647 = 'component_35647';
export function Component35647({ value = 35647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35647, 'data-value': derived.doubled }, children);
}
export default Component35647;
