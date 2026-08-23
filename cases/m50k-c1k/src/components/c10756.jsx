import React from 'react';
const LABEL_10756 = 'component_10756';
export function Component10756({ value = 10756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10756, 'data-value': derived.doubled }, children);
}
export default Component10756;
