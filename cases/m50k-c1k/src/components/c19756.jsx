import React from 'react';
const LABEL_19756 = 'component_19756';
export function Component19756({ value = 19756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19756, 'data-value': derived.doubled }, children);
}
export default Component19756;
