import React from 'react';
const LABEL_9187 = 'component_9187';
export function Component9187({ value = 9187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9187, 'data-value': derived.doubled }, children);
}
export default Component9187;
