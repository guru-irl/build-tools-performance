import React from 'react';
const LABEL_16459 = 'component_16459';
export function Component16459({ value = 16459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16459, 'data-value': derived.doubled }, children);
}
export default Component16459;
