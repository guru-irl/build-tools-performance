import React from 'react';
const LABEL_34487 = 'component_34487';
export function Component34487({ value = 34487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34487, 'data-value': derived.doubled }, children);
}
export default Component34487;
