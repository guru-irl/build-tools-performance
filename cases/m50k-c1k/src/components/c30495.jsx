import React from 'react';
const LABEL_30495 = 'component_30495';
export function Component30495({ value = 30495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30495, 'data-value': derived.doubled }, children);
}
export default Component30495;
