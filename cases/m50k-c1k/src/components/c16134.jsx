import React from 'react';
const LABEL_16134 = 'component_16134';
export function Component16134({ value = 16134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16134, 'data-value': derived.doubled }, children);
}
export default Component16134;
