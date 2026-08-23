import React from 'react';
const LABEL_9868 = 'component_9868';
export function Component9868({ value = 9868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9868, 'data-value': derived.doubled }, children);
}
export default Component9868;
