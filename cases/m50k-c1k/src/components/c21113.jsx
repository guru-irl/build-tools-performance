import React from 'react';
const LABEL_21113 = 'component_21113';
export function Component21113({ value = 21113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21113, 'data-value': derived.doubled }, children);
}
export default Component21113;
