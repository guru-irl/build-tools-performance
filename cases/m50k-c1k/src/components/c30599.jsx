import React from 'react';
const LABEL_30599 = 'component_30599';
export function Component30599({ value = 30599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30599, 'data-value': derived.doubled }, children);
}
export default Component30599;
