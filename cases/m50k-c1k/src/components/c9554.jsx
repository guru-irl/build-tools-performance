import React from 'react';
const LABEL_9554 = 'component_9554';
export function Component9554({ value = 9554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9554, 'data-value': derived.doubled }, children);
}
export default Component9554;
