import React from 'react';
const LABEL_15193 = 'component_15193';
export function Component15193({ value = 15193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15193, 'data-value': derived.doubled }, children);
}
export default Component15193;
