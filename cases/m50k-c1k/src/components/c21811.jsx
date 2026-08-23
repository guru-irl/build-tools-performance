import React from 'react';
const LABEL_21811 = 'component_21811';
export function Component21811({ value = 21811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21811, 'data-value': derived.doubled }, children);
}
export default Component21811;
