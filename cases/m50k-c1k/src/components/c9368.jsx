import React from 'react';
const LABEL_9368 = 'component_9368';
export function Component9368({ value = 9368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9368, 'data-value': derived.doubled }, children);
}
export default Component9368;
