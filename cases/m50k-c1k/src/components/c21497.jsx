import React from 'react';
const LABEL_21497 = 'component_21497';
export function Component21497({ value = 21497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21497, 'data-value': derived.doubled }, children);
}
export default Component21497;
