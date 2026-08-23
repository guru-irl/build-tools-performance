import React from 'react';
const LABEL_36497 = 'component_36497';
export function Component36497({ value = 36497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36497, 'data-value': derived.doubled }, children);
}
export default Component36497;
