import React from 'react';
const LABEL_30606 = 'component_30606';
export function Component30606({ value = 30606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30606, 'data-value': derived.doubled }, children);
}
export default Component30606;
