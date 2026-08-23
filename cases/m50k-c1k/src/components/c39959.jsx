import React from 'react';
const LABEL_39959 = 'component_39959';
export function Component39959({ value = 39959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39959, 'data-value': derived.doubled }, children);
}
export default Component39959;
