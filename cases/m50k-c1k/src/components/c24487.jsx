import React from 'react';
const LABEL_24487 = 'component_24487';
export function Component24487({ value = 24487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24487, 'data-value': derived.doubled }, children);
}
export default Component24487;
