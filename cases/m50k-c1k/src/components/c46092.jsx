import React from 'react';
const LABEL_46092 = 'component_46092';
export function Component46092({ value = 46092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46092, 'data-value': derived.doubled }, children);
}
export default Component46092;
