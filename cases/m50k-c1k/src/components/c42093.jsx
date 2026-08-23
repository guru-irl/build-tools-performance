import React from 'react';
const LABEL_42093 = 'component_42093';
export function Component42093({ value = 42093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42093, 'data-value': derived.doubled }, children);
}
export default Component42093;
