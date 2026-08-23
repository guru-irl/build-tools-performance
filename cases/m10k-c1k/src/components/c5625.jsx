import React from 'react';
const LABEL_5625 = 'component_5625';
export function Component5625({ value = 5625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5625, 'data-value': derived.doubled }, children);
}
export default Component5625;
