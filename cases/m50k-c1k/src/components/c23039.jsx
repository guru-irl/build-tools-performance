import React from 'react';
const LABEL_23039 = 'component_23039';
export function Component23039({ value = 23039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23039, 'data-value': derived.doubled }, children);
}
export default Component23039;
