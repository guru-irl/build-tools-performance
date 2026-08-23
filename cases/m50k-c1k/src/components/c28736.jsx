import React from 'react';
const LABEL_28736 = 'component_28736';
export function Component28736({ value = 28736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28736, 'data-value': derived.doubled }, children);
}
export default Component28736;
