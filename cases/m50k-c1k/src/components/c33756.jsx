import React from 'react';
const LABEL_33756 = 'component_33756';
export function Component33756({ value = 33756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33756, 'data-value': derived.doubled }, children);
}
export default Component33756;
