import React from 'react';
const LABEL_43495 = 'component_43495';
export function Component43495({ value = 43495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43495, 'data-value': derived.doubled }, children);
}
export default Component43495;
