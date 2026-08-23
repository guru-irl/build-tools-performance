import React from 'react';
const LABEL_23625 = 'component_23625';
export function Component23625({ value = 23625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23625, 'data-value': derived.doubled }, children);
}
export default Component23625;
