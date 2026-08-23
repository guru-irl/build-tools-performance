import React from 'react';
const LABEL_42314 = 'component_42314';
export function Component42314({ value = 42314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42314, 'data-value': derived.doubled }, children);
}
export default Component42314;
