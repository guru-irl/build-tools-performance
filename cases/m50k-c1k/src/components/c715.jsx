import React from 'react';
const LABEL_715 = 'component_715';
export function Component715({ value = 715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_715, 'data-value': derived.doubled }, children);
}
export default Component715;
