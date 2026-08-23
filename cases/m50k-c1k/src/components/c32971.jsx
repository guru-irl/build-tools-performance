import React from 'react';
const LABEL_32971 = 'component_32971';
export function Component32971({ value = 32971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32971, 'data-value': derived.doubled }, children);
}
export default Component32971;
