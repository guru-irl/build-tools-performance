import React from 'react';
const LABEL_30092 = 'component_30092';
export function Component30092({ value = 30092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30092, 'data-value': derived.doubled }, children);
}
export default Component30092;
