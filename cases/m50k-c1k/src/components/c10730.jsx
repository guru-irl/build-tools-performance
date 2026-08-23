import React from 'react';
const LABEL_10730 = 'component_10730';
export function Component10730({ value = 10730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10730, 'data-value': derived.doubled }, children);
}
export default Component10730;
