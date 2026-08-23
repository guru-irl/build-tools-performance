import React from 'react';
const LABEL_15459 = 'component_15459';
export function Component15459({ value = 15459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15459, 'data-value': derived.doubled }, children);
}
export default Component15459;
