import React from 'react';
const LABEL_15287 = 'component_15287';
export function Component15287({ value = 15287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15287, 'data-value': derived.doubled }, children);
}
export default Component15287;
