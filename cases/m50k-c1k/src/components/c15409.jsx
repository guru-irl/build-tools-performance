import React from 'react';
const LABEL_15409 = 'component_15409';
export function Component15409({ value = 15409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15409, 'data-value': derived.doubled }, children);
}
export default Component15409;
