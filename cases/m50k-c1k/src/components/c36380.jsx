import React from 'react';
const LABEL_36380 = 'component_36380';
export function Component36380({ value = 36380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36380, 'data-value': derived.doubled }, children);
}
export default Component36380;
