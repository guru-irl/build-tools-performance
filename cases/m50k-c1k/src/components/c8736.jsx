import React from 'react';
const LABEL_8736 = 'component_8736';
export function Component8736({ value = 8736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8736, 'data-value': derived.doubled }, children);
}
export default Component8736;
