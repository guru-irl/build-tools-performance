import React from 'react';
const LABEL_38787 = 'component_38787';
export function Component38787({ value = 38787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38787, 'data-value': derived.doubled }, children);
}
export default Component38787;
