import React from 'react';
const LABEL_34809 = 'component_34809';
export function Component34809({ value = 34809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34809, 'data-value': derived.doubled }, children);
}
export default Component34809;
