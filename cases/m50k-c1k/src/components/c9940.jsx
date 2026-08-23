import React from 'react';
const LABEL_9940 = 'component_9940';
export function Component9940({ value = 9940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9940, 'data-value': derived.doubled }, children);
}
export default Component9940;
