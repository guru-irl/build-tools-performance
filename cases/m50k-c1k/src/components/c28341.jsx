import React from 'react';
const LABEL_28341 = 'component_28341';
export function Component28341({ value = 28341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28341, 'data-value': derived.doubled }, children);
}
export default Component28341;
