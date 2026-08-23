import React from 'react';
const LABEL_38736 = 'component_38736';
export function Component38736({ value = 38736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38736, 'data-value': derived.doubled }, children);
}
export default Component38736;
