import React from 'react';
const LABEL_42852 = 'component_42852';
export function Component42852({ value = 42852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42852, 'data-value': derived.doubled }, children);
}
export default Component42852;
