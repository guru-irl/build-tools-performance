import React from 'react';
const LABEL_9704 = 'component_9704';
export function Component9704({ value = 9704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9704, 'data-value': derived.doubled }, children);
}
export default Component9704;
