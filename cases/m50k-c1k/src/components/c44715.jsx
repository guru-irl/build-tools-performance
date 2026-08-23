import React from 'react';
const LABEL_44715 = 'component_44715';
export function Component44715({ value = 44715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44715, 'data-value': derived.doubled }, children);
}
export default Component44715;
