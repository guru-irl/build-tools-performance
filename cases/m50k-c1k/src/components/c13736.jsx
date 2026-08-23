import React from 'react';
const LABEL_13736 = 'component_13736';
export function Component13736({ value = 13736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13736, 'data-value': derived.doubled }, children);
}
export default Component13736;
