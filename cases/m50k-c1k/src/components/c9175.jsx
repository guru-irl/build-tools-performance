import React from 'react';
const LABEL_9175 = 'component_9175';
export function Component9175({ value = 9175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9175, 'data-value': derived.doubled }, children);
}
export default Component9175;
