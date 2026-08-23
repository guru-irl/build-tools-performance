import React from 'react';
const LABEL_30876 = 'component_30876';
export function Component30876({ value = 30876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30876, 'data-value': derived.doubled }, children);
}
export default Component30876;
