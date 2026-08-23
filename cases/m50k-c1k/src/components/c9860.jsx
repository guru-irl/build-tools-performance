import React from 'react';
const LABEL_9860 = 'component_9860';
export function Component9860({ value = 9860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9860, 'data-value': derived.doubled }, children);
}
export default Component9860;
