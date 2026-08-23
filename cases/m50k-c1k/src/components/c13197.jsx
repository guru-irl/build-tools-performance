import React from 'react';
const LABEL_13197 = 'component_13197';
export function Component13197({ value = 13197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13197, 'data-value': derived.doubled }, children);
}
export default Component13197;
