import React from 'react';
const LABEL_15910 = 'component_15910';
export function Component15910({ value = 15910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15910, 'data-value': derived.doubled }, children);
}
export default Component15910;
