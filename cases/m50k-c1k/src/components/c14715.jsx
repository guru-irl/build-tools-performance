import React from 'react';
const LABEL_14715 = 'component_14715';
export function Component14715({ value = 14715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14715, 'data-value': derived.doubled }, children);
}
export default Component14715;
