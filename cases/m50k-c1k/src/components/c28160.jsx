import React from 'react';
const LABEL_28160 = 'component_28160';
export function Component28160({ value = 28160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28160, 'data-value': derived.doubled }, children);
}
export default Component28160;
