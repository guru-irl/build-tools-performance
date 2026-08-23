import React from 'react';
const LABEL_23551 = 'component_23551';
export function Component23551({ value = 23551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23551, 'data-value': derived.doubled }, children);
}
export default Component23551;
