import React from 'react';
const LABEL_10063 = 'component_10063';
export function Component10063({ value = 10063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10063, 'data-value': derived.doubled }, children);
}
export default Component10063;
