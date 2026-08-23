import React from 'react';
const LABEL_16736 = 'component_16736';
export function Component16736({ value = 16736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16736, 'data-value': derived.doubled }, children);
}
export default Component16736;
