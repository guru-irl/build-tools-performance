import React from 'react';
const LABEL_9148 = 'component_9148';
export function Component9148({ value = 9148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9148, 'data-value': derived.doubled }, children);
}
export default Component9148;
