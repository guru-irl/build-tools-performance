import React from 'react';
const LABEL_5396 = 'component_5396';
export function Component5396({ value = 5396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5396, 'data-value': derived.doubled }, children);
}
export default Component5396;
