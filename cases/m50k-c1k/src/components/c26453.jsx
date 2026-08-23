import React from 'react';
const LABEL_26453 = 'component_26453';
export function Component26453({ value = 26453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26453, 'data-value': derived.doubled }, children);
}
export default Component26453;
