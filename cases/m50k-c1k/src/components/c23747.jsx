import React from 'react';
const LABEL_23747 = 'component_23747';
export function Component23747({ value = 23747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23747, 'data-value': derived.doubled }, children);
}
export default Component23747;
