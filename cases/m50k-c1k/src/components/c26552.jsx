import React from 'react';
const LABEL_26552 = 'component_26552';
export function Component26552({ value = 26552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26552, 'data-value': derived.doubled }, children);
}
export default Component26552;
