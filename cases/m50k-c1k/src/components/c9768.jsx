import React from 'react';
const LABEL_9768 = 'component_9768';
export function Component9768({ value = 9768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9768, 'data-value': derived.doubled }, children);
}
export default Component9768;
