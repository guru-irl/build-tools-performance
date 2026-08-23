import React from 'react';
const LABEL_22736 = 'component_22736';
export function Component22736({ value = 22736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22736, 'data-value': derived.doubled }, children);
}
export default Component22736;
