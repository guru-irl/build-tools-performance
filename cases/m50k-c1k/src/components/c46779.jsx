import React from 'react';
const LABEL_46779 = 'component_46779';
export function Component46779({ value = 46779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46779, 'data-value': derived.doubled }, children);
}
export default Component46779;
