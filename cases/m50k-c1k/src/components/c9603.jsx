import React from 'react';
const LABEL_9603 = 'component_9603';
export function Component9603({ value = 9603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9603, 'data-value': derived.doubled }, children);
}
export default Component9603;
