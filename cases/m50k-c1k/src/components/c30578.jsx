import React from 'react';
const LABEL_30578 = 'component_30578';
export function Component30578({ value = 30578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30578, 'data-value': derived.doubled }, children);
}
export default Component30578;
