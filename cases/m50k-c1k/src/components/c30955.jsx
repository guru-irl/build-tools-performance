import React from 'react';
const LABEL_30955 = 'component_30955';
export function Component30955({ value = 30955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30955, 'data-value': derived.doubled }, children);
}
export default Component30955;
