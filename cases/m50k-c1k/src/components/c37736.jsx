import React from 'react';
const LABEL_37736 = 'component_37736';
export function Component37736({ value = 37736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37736, 'data-value': derived.doubled }, children);
}
export default Component37736;
