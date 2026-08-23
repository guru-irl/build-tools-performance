import React from 'react';
const LABEL_15754 = 'component_15754';
export function Component15754({ value = 15754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15754, 'data-value': derived.doubled }, children);
}
export default Component15754;
