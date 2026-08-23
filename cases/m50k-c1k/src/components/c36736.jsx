import React from 'react';
const LABEL_36736 = 'component_36736';
export function Component36736({ value = 36736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36736, 'data-value': derived.doubled }, children);
}
export default Component36736;
