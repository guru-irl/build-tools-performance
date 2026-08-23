import React from 'react';
const LABEL_30836 = 'component_30836';
export function Component30836({ value = 30836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30836, 'data-value': derived.doubled }, children);
}
export default Component30836;
