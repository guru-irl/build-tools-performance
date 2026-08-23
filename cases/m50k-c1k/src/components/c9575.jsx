import React from 'react';
const LABEL_9575 = 'component_9575';
export function Component9575({ value = 9575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9575, 'data-value': derived.doubled }, children);
}
export default Component9575;
