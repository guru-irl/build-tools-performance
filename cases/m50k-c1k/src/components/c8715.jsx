import React from 'react';
const LABEL_8715 = 'component_8715';
export function Component8715({ value = 8715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8715, 'data-value': derived.doubled }, children);
}
export default Component8715;
