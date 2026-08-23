import React from 'react';
const LABEL_9759 = 'component_9759';
export function Component9759({ value = 9759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9759, 'data-value': derived.doubled }, children);
}
export default Component9759;
