import React from 'react';
const LABEL_9502 = 'component_9502';
export function Component9502({ value = 9502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9502, 'data-value': derived.doubled }, children);
}
export default Component9502;
