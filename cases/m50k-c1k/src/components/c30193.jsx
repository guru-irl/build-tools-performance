import React from 'react';
const LABEL_30193 = 'component_30193';
export function Component30193({ value = 30193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30193, 'data-value': derived.doubled }, children);
}
export default Component30193;
