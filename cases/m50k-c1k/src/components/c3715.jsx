import React from 'react';
const LABEL_3715 = 'component_3715';
export function Component3715({ value = 3715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3715, 'data-value': derived.doubled }, children);
}
export default Component3715;
