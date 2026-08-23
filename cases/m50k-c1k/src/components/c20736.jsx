import React from 'react';
const LABEL_20736 = 'component_20736';
export function Component20736({ value = 20736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20736, 'data-value': derived.doubled }, children);
}
export default Component20736;
