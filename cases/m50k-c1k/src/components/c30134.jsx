import React from 'react';
const LABEL_30134 = 'component_30134';
export function Component30134({ value = 30134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30134, 'data-value': derived.doubled }, children);
}
export default Component30134;
