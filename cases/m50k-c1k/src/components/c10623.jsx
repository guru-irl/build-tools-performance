import React from 'react';
const LABEL_10623 = 'component_10623';
export function Component10623({ value = 10623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10623, 'data-value': derived.doubled }, children);
}
export default Component10623;
