import React from 'react';
const LABEL_6552 = 'component_6552';
export function Component6552({ value = 6552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6552, 'data-value': derived.doubled }, children);
}
export default Component6552;
