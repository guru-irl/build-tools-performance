import React from 'react';
const LABEL_10409 = 'component_10409';
export function Component10409({ value = 10409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10409, 'data-value': derived.doubled }, children);
}
export default Component10409;
