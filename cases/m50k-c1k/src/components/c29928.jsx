import React from 'react';
const LABEL_29928 = 'component_29928';
export function Component29928({ value = 29928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29928, 'data-value': derived.doubled }, children);
}
export default Component29928;
