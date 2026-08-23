import React from 'react';
const LABEL_46736 = 'component_46736';
export function Component46736({ value = 46736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46736, 'data-value': derived.doubled }, children);
}
export default Component46736;
