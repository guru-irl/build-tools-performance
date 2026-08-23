import React from 'react';
const LABEL_12276 = 'component_12276';
export function Component12276({ value = 12276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12276, 'data-value': derived.doubled }, children);
}
export default Component12276;
