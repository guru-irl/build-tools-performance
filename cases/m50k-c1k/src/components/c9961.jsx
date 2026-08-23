import React from 'react';
const LABEL_9961 = 'component_9961';
export function Component9961({ value = 9961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9961, 'data-value': derived.doubled }, children);
}
export default Component9961;
