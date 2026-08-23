import React from 'react';
const LABEL_11715 = 'component_11715';
export function Component11715({ value = 11715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11715, 'data-value': derived.doubled }, children);
}
export default Component11715;
