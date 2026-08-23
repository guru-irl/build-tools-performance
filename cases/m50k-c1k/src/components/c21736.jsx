import React from 'react';
const LABEL_21736 = 'component_21736';
export function Component21736({ value = 21736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21736, 'data-value': derived.doubled }, children);
}
export default Component21736;
