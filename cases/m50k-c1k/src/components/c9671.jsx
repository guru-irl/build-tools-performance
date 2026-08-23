import React from 'react';
const LABEL_9671 = 'component_9671';
export function Component9671({ value = 9671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9671, 'data-value': derived.doubled }, children);
}
export default Component9671;
