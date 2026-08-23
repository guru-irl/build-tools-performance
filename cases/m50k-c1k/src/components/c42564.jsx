import React from 'react';
const LABEL_42564 = 'component_42564';
export function Component42564({ value = 42564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42564, 'data-value': derived.doubled }, children);
}
export default Component42564;
