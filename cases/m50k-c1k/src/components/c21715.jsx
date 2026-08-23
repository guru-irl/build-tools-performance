import React from 'react';
const LABEL_21715 = 'component_21715';
export function Component21715({ value = 21715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21715, 'data-value': derived.doubled }, children);
}
export default Component21715;
