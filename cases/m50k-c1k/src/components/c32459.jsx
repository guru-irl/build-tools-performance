import React from 'react';
const LABEL_32459 = 'component_32459';
export function Component32459({ value = 32459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32459, 'data-value': derived.doubled }, children);
}
export default Component32459;
