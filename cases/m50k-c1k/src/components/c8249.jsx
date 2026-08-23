import React from 'react';
const LABEL_8249 = 'component_8249';
export function Component8249({ value = 8249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8249, 'data-value': derived.doubled }, children);
}
export default Component8249;
