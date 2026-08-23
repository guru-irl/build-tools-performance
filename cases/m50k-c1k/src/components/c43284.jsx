import React from 'react';
const LABEL_43284 = 'component_43284';
export function Component43284({ value = 43284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43284, 'data-value': derived.doubled }, children);
}
export default Component43284;
