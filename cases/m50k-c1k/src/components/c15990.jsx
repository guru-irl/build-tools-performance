import React from 'react';
const LABEL_15990 = 'component_15990';
export function Component15990({ value = 15990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15990, 'data-value': derived.doubled }, children);
}
export default Component15990;
