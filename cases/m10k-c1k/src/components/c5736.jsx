import React from 'react';
const LABEL_5736 = 'component_5736';
export function Component5736({ value = 5736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5736, 'data-value': derived.doubled }, children);
}
export default Component5736;
