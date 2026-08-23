import React from 'react';
const LABEL_30264 = 'component_30264';
export function Component30264({ value = 30264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30264, 'data-value': derived.doubled }, children);
}
export default Component30264;
