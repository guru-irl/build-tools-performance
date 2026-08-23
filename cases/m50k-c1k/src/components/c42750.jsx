import React from 'react';
const LABEL_42750 = 'component_42750';
export function Component42750({ value = 42750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42750, 'data-value': derived.doubled }, children);
}
export default Component42750;
