import React from 'react';
const LABEL_17736 = 'component_17736';
export function Component17736({ value = 17736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17736, 'data-value': derived.doubled }, children);
}
export default Component17736;
