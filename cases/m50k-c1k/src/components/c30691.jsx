import React from 'react';
const LABEL_30691 = 'component_30691';
export function Component30691({ value = 30691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30691, 'data-value': derived.doubled }, children);
}
export default Component30691;
