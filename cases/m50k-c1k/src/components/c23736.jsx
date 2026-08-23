import React from 'react';
const LABEL_23736 = 'component_23736';
export function Component23736({ value = 23736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23736, 'data-value': derived.doubled }, children);
}
export default Component23736;
