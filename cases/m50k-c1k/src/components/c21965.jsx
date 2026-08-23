import React from 'react';
const LABEL_21965 = 'component_21965';
export function Component21965({ value = 21965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21965, 'data-value': derived.doubled }, children);
}
export default Component21965;
