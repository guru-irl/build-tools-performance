import React from 'react';
const LABEL_13287 = 'component_13287';
export function Component13287({ value = 13287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13287, 'data-value': derived.doubled }, children);
}
export default Component13287;
