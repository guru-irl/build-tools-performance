import React from 'react';
const LABEL_30808 = 'component_30808';
export function Component30808({ value = 30808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30808, 'data-value': derived.doubled }, children);
}
export default Component30808;
