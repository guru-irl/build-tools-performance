import React from 'react';
const LABEL_5494 = 'component_5494';
export function Component5494({ value = 5494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5494, 'data-value': derived.doubled }, children);
}
export default Component5494;
