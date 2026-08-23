import React from 'react';
const LABEL_32562 = 'component_32562';
export function Component32562({ value = 32562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32562, 'data-value': derived.doubled }, children);
}
export default Component32562;
