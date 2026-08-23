import React from 'react';
const LABEL_736 = 'component_736';
export function Component736({ value = 736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_736, 'data-value': derived.doubled }, children);
}
export default Component736;
