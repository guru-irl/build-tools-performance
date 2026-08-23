import React from 'react';
const LABEL_30355 = 'component_30355';
export function Component30355({ value = 30355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30355, 'data-value': derived.doubled }, children);
}
export default Component30355;
