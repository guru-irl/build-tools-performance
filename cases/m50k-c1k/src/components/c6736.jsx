import React from 'react';
const LABEL_6736 = 'component_6736';
export function Component6736({ value = 6736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6736, 'data-value': derived.doubled }, children);
}
export default Component6736;
