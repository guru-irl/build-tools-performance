import React from 'react';
const LABEL_38117 = 'component_38117';
export function Component38117({ value = 38117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38117, 'data-value': derived.doubled }, children);
}
export default Component38117;
