import React from 'react';
const LABEL_23552 = 'component_23552';
export function Component23552({ value = 23552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23552, 'data-value': derived.doubled }, children);
}
export default Component23552;
