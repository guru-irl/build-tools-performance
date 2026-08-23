import React from 'react';
const LABEL_10959 = 'component_10959';
export function Component10959({ value = 10959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10959, 'data-value': derived.doubled }, children);
}
export default Component10959;
