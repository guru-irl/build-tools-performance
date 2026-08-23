import React from 'react';
const LABEL_12736 = 'component_12736';
export function Component12736({ value = 12736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12736, 'data-value': derived.doubled }, children);
}
export default Component12736;
