import React from 'react';
const LABEL_5459 = 'component_5459';
export function Component5459({ value = 5459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5459, 'data-value': derived.doubled }, children);
}
export default Component5459;
