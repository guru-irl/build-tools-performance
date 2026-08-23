import React from 'react';
const LABEL_38133 = 'component_38133';
export function Component38133({ value = 38133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38133, 'data-value': derived.doubled }, children);
}
export default Component38133;
