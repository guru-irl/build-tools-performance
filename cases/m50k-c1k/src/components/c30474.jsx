import React from 'react';
const LABEL_30474 = 'component_30474';
export function Component30474({ value = 30474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30474, 'data-value': derived.doubled }, children);
}
export default Component30474;
