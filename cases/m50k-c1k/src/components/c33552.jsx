import React from 'react';
const LABEL_33552 = 'component_33552';
export function Component33552({ value = 33552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33552, 'data-value': derived.doubled }, children);
}
export default Component33552;
