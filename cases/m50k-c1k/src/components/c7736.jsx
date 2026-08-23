import React from 'react';
const LABEL_7736 = 'component_7736';
export function Component7736({ value = 7736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7736, 'data-value': derived.doubled }, children);
}
export default Component7736;
