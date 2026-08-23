import React from 'react';
const LABEL_3497 = 'component_3497';
export function Component3497({ value = 3497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3497, 'data-value': derived.doubled }, children);
}
export default Component3497;
