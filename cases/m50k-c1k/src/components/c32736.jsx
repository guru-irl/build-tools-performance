import React from 'react';
const LABEL_32736 = 'component_32736';
export function Component32736({ value = 32736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32736, 'data-value': derived.doubled }, children);
}
export default Component32736;
