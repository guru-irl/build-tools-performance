import React from 'react';
const LABEL_21081 = 'component_21081';
export function Component21081({ value = 21081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21081, 'data-value': derived.doubled }, children);
}
export default Component21081;
