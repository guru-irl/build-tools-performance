import React from 'react';
const LABEL_28732 = 'component_28732';
export function Component28732({ value = 28732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28732, 'data-value': derived.doubled }, children);
}
export default Component28732;
