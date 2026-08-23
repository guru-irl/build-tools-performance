import React from 'react';
const LABEL_20858 = 'component_20858';
export function Component20858({ value = 20858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20858, 'data-value': derived.doubled }, children);
}
export default Component20858;
