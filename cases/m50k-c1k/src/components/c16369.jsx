import React from 'react';
const LABEL_16369 = 'component_16369';
export function Component16369({ value = 16369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16369, 'data-value': derived.doubled }, children);
}
export default Component16369;
