import React from 'react';
const LABEL_12750 = 'component_12750';
export function Component12750({ value = 12750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12750, 'data-value': derived.doubled }, children);
}
export default Component12750;
