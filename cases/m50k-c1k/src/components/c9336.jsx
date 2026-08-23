import React from 'react';
const LABEL_9336 = 'component_9336';
export function Component9336({ value = 9336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9336, 'data-value': derived.doubled }, children);
}
export default Component9336;
