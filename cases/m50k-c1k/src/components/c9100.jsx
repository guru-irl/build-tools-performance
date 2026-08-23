import React from 'react';
const LABEL_9100 = 'component_9100';
export function Component9100({ value = 9100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9100, 'data-value': derived.doubled }, children);
}
export default Component9100;
