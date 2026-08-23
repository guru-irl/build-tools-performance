import React from 'react';
const LABEL_20715 = 'component_20715';
export function Component20715({ value = 20715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20715, 'data-value': derived.doubled }, children);
}
export default Component20715;
