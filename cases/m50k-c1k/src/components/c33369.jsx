import React from 'react';
const LABEL_33369 = 'component_33369';
export function Component33369({ value = 33369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33369, 'data-value': derived.doubled }, children);
}
export default Component33369;
