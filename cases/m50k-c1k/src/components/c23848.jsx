import React from 'react';
const LABEL_23848 = 'component_23848';
export function Component23848({ value = 23848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23848, 'data-value': derived.doubled }, children);
}
export default Component23848;
