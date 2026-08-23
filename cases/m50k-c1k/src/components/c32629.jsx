import React from 'react';
const LABEL_32629 = 'component_32629';
export function Component32629({ value = 32629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32629, 'data-value': derived.doubled }, children);
}
export default Component32629;
