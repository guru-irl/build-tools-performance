import React from 'react';
const LABEL_9048 = 'component_9048';
export function Component9048({ value = 9048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9048, 'data-value': derived.doubled }, children);
}
export default Component9048;
