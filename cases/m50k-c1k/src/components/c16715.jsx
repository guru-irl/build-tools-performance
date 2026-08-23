import React from 'react';
const LABEL_16715 = 'component_16715';
export function Component16715({ value = 16715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16715, 'data-value': derived.doubled }, children);
}
export default Component16715;
