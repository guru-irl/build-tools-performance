import React from 'react';
const LABEL_10369 = 'component_10369';
export function Component10369({ value = 10369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10369, 'data-value': derived.doubled }, children);
}
export default Component10369;
