import React from 'react';
const LABEL_24709 = 'component_24709';
export function Component24709({ value = 24709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24709, 'data-value': derived.doubled }, children);
}
export default Component24709;
