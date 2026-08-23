import React from 'react';
const LABEL_12405 = 'component_12405';
export function Component12405({ value = 12405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12405, 'data-value': derived.doubled }, children);
}
export default Component12405;
