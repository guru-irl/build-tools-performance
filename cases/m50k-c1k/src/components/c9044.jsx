import React from 'react';
const LABEL_9044 = 'component_9044';
export function Component9044({ value = 9044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9044, 'data-value': derived.doubled }, children);
}
export default Component9044;
