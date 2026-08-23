import React from 'react';
const LABEL_9728 = 'component_9728';
export function Component9728({ value = 9728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9728, 'data-value': derived.doubled }, children);
}
export default Component9728;
