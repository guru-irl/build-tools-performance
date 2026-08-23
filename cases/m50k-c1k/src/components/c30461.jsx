import React from 'react';
const LABEL_30461 = 'component_30461';
export function Component30461({ value = 30461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30461, 'data-value': derived.doubled }, children);
}
export default Component30461;
