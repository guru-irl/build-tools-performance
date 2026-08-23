import React from 'react';
const LABEL_35928 = 'component_35928';
export function Component35928({ value = 35928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35928, 'data-value': derived.doubled }, children);
}
export default Component35928;
