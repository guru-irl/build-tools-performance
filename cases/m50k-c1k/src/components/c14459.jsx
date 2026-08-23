import React from 'react';
const LABEL_14459 = 'component_14459';
export function Component14459({ value = 14459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14459, 'data-value': derived.doubled }, children);
}
export default Component14459;
