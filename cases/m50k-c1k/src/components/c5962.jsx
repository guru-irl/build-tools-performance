import React from 'react';
const LABEL_5962 = 'component_5962';
export function Component5962({ value = 5962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5962, 'data-value': derived.doubled }, children);
}
export default Component5962;
