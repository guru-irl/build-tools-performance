import React from 'react';
const LABEL_11487 = 'component_11487';
export function Component11487({ value = 11487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11487, 'data-value': derived.doubled }, children);
}
export default Component11487;
