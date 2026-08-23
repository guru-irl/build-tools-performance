import React from 'react';
const LABEL_10475 = 'component_10475';
export function Component10475({ value = 10475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10475, 'data-value': derived.doubled }, children);
}
export default Component10475;
