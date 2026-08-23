import React from 'react';
const LABEL_32431 = 'component_32431';
export function Component32431({ value = 32431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32431, 'data-value': derived.doubled }, children);
}
export default Component32431;
