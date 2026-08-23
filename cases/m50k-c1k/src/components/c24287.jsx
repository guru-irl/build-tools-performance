import React from 'react';
const LABEL_24287 = 'component_24287';
export function Component24287({ value = 24287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24287, 'data-value': derived.doubled }, children);
}
export default Component24287;
