import React from 'react';
const LABEL_30102 = 'component_30102';
export function Component30102({ value = 30102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30102, 'data-value': derived.doubled }, children);
}
export default Component30102;
