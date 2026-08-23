import React from 'react';
const LABEL_39715 = 'component_39715';
export function Component39715({ value = 39715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39715, 'data-value': derived.doubled }, children);
}
export default Component39715;
