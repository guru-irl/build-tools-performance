import React from 'react';
const LABEL_30250 = 'component_30250';
export function Component30250({ value = 30250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30250, 'data-value': derived.doubled }, children);
}
export default Component30250;
