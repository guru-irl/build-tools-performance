import React from 'react';
const LABEL_46552 = 'component_46552';
export function Component46552({ value = 46552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46552, 'data-value': derived.doubled }, children);
}
export default Component46552;
