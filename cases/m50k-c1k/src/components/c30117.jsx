import React from 'react';
const LABEL_30117 = 'component_30117';
export function Component30117({ value = 30117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30117, 'data-value': derived.doubled }, children);
}
export default Component30117;
