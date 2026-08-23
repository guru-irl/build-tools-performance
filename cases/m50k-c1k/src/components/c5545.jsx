import React from 'react';
const LABEL_5545 = 'component_5545';
export function Component5545({ value = 5545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5545, 'data-value': derived.doubled }, children);
}
export default Component5545;
