import React from 'react';
const LABEL_10732 = 'component_10732';
export function Component10732({ value = 10732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10732, 'data-value': derived.doubled }, children);
}
export default Component10732;
