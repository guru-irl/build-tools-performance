import React from 'react';
const LABEL_9855 = 'component_9855';
export function Component9855({ value = 9855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9855, 'data-value': derived.doubled }, children);
}
export default Component9855;
