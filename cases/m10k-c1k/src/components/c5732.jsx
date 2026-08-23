import React from 'react';
const LABEL_5732 = 'component_5732';
export function Component5732({ value = 5732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5732, 'data-value': derived.doubled }, children);
}
export default Component5732;
