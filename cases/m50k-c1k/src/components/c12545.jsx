import React from 'react';
const LABEL_12545 = 'component_12545';
export function Component12545({ value = 12545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12545, 'data-value': derived.doubled }, children);
}
export default Component12545;
