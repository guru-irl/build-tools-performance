import React from 'react';
const LABEL_42187 = 'component_42187';
export function Component42187({ value = 42187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42187, 'data-value': derived.doubled }, children);
}
export default Component42187;
