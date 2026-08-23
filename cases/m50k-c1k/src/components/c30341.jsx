import React from 'react';
const LABEL_30341 = 'component_30341';
export function Component30341({ value = 30341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30341, 'data-value': derived.doubled }, children);
}
export default Component30341;
