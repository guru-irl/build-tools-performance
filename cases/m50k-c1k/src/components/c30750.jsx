import React from 'react';
const LABEL_30750 = 'component_30750';
export function Component30750({ value = 30750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30750, 'data-value': derived.doubled }, children);
}
export default Component30750;
