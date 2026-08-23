import React from 'react';
const LABEL_33523 = 'component_33523';
export function Component33523({ value = 33523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33523, 'data-value': derived.doubled }, children);
}
export default Component33523;
