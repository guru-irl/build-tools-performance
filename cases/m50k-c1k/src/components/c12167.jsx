import React from 'react';
const LABEL_12167 = 'component_12167';
export function Component12167({ value = 12167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12167, 'data-value': derived.doubled }, children);
}
export default Component12167;
