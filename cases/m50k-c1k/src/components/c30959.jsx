import React from 'react';
const LABEL_30959 = 'component_30959';
export function Component30959({ value = 30959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30959, 'data-value': derived.doubled }, children);
}
export default Component30959;
