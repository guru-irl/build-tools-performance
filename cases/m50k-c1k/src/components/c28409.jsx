import React from 'react';
const LABEL_28409 = 'component_28409';
export function Component28409({ value = 28409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28409, 'data-value': derived.doubled }, children);
}
export default Component28409;
