import React from 'react';
const LABEL_9180 = 'component_9180';
export function Component9180({ value = 9180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9180, 'data-value': derived.doubled }, children);
}
export default Component9180;
