import React from 'react';
const LABEL_32928 = 'component_32928';
export function Component32928({ value = 32928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32928, 'data-value': derived.doubled }, children);
}
export default Component32928;
