import React from 'react';
const LABEL_24736 = 'component_24736';
export function Component24736({ value = 24736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24736, 'data-value': derived.doubled }, children);
}
export default Component24736;
