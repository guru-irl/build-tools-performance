import React from 'react';
const LABEL_9612 = 'component_9612';
export function Component9612({ value = 9612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9612, 'data-value': derived.doubled }, children);
}
export default Component9612;
