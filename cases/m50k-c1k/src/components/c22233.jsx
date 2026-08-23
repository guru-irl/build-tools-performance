import React from 'react';
const LABEL_22233 = 'component_22233';
export function Component22233({ value = 22233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22233, 'data-value': derived.doubled }, children);
}
export default Component22233;
