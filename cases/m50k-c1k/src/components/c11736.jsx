import React from 'react';
const LABEL_11736 = 'component_11736';
export function Component11736({ value = 11736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11736, 'data-value': derived.doubled }, children);
}
export default Component11736;
