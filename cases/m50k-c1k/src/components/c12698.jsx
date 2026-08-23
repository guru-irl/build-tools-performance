import React from 'react';
const LABEL_12698 = 'component_12698';
export function Component12698({ value = 12698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12698, 'data-value': derived.doubled }, children);
}
export default Component12698;
