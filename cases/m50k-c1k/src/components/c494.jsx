import React from 'react';
const LABEL_494 = 'component_494';
export function Component494({ value = 494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_494, 'data-value': derived.doubled }, children);
}
export default Component494;
