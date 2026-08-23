import React from 'react';
const LABEL_23523 = 'component_23523';
export function Component23523({ value = 23523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23523, 'data-value': derived.doubled }, children);
}
export default Component23523;
