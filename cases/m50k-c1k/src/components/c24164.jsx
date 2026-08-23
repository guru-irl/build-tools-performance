import React from 'react';
const LABEL_24164 = 'component_24164';
export function Component24164({ value = 24164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24164, 'data-value': derived.doubled }, children);
}
export default Component24164;
