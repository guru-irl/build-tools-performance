import React from 'react';
const LABEL_13369 = 'component_13369';
export function Component13369({ value = 13369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13369, 'data-value': derived.doubled }, children);
}
export default Component13369;
