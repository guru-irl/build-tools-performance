import React from 'react';
const LABEL_3736 = 'component_3736';
export function Component3736({ value = 3736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3736, 'data-value': derived.doubled }, children);
}
export default Component3736;
