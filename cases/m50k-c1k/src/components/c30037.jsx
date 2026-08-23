import React from 'react';
const LABEL_30037 = 'component_30037';
export function Component30037({ value = 30037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30037, 'data-value': derived.doubled }, children);
}
export default Component30037;
