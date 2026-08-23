import React from 'react';
const LABEL_9628 = 'component_9628';
export function Component9628({ value = 9628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9628, 'data-value': derived.doubled }, children);
}
export default Component9628;
