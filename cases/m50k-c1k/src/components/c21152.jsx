import React from 'react';
const LABEL_21152 = 'component_21152';
export function Component21152({ value = 21152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21152, 'data-value': derived.doubled }, children);
}
export default Component21152;
