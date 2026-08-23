import React from 'react';
const LABEL_15369 = 'component_15369';
export function Component15369({ value = 15369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15369, 'data-value': derived.doubled }, children);
}
export default Component15369;
