import React from 'react';
const LABEL_18133 = 'component_18133';
export function Component18133({ value = 18133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18133, 'data-value': derived.doubled }, children);
}
export default Component18133;
