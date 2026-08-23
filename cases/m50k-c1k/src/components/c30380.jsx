import React from 'react';
const LABEL_30380 = 'component_30380';
export function Component30380({ value = 30380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30380, 'data-value': derived.doubled }, children);
}
export default Component30380;
