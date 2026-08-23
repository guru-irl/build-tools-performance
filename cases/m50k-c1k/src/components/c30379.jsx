import React from 'react';
const LABEL_30379 = 'component_30379';
export function Component30379({ value = 30379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30379, 'data-value': derived.doubled }, children);
}
export default Component30379;
