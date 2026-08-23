import React from 'react';
const LABEL_9431 = 'component_9431';
export function Component9431({ value = 9431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9431, 'data-value': derived.doubled }, children);
}
export default Component9431;
