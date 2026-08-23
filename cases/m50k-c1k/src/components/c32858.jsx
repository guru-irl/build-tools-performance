import React from 'react';
const LABEL_32858 = 'component_32858';
export function Component32858({ value = 32858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32858, 'data-value': derived.doubled }, children);
}
export default Component32858;
