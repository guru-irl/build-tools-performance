import React from 'react';
const LABEL_9981 = 'component_9981';
export function Component9981({ value = 9981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9981, 'data-value': derived.doubled }, children);
}
export default Component9981;
