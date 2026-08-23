import React from 'react';
const LABEL_12445 = 'component_12445';
export function Component12445({ value = 12445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12445, 'data-value': derived.doubled }, children);
}
export default Component12445;
