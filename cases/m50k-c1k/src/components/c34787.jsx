import React from 'react';
const LABEL_34787 = 'component_34787';
export function Component34787({ value = 34787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34787, 'data-value': derived.doubled }, children);
}
export default Component34787;
