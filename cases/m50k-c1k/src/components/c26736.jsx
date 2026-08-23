import React from 'react';
const LABEL_26736 = 'component_26736';
export function Component26736({ value = 26736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26736, 'data-value': derived.doubled }, children);
}
export default Component26736;
