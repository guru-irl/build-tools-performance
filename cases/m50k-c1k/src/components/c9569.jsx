import React from 'react';
const LABEL_9569 = 'component_9569';
export function Component9569({ value = 9569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9569, 'data-value': derived.doubled }, children);
}
export default Component9569;
