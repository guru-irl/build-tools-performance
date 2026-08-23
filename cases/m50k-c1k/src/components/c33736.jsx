import React from 'react';
const LABEL_33736 = 'component_33736';
export function Component33736({ value = 33736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33736, 'data-value': derived.doubled }, children);
}
export default Component33736;
