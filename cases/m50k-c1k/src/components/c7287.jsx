import React from 'react';
const LABEL_7287 = 'component_7287';
export function Component7287({ value = 7287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7287, 'data-value': derived.doubled }, children);
}
export default Component7287;
