import React from 'react';
const LABEL_30731 = 'component_30731';
export function Component30731({ value = 30731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30731, 'data-value': derived.doubled }, children);
}
export default Component30731;
