import React from 'react';
const LABEL_30113 = 'component_30113';
export function Component30113({ value = 30113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30113, 'data-value': derived.doubled }, children);
}
export default Component30113;
