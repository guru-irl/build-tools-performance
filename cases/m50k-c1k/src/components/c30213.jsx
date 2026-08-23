import React from 'react';
const LABEL_30213 = 'component_30213';
export function Component30213({ value = 30213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30213, 'data-value': derived.doubled }, children);
}
export default Component30213;
