import React from 'react';
const LABEL_44126 = 'component_44126';
export function Component44126({ value = 44126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44126, 'data-value': derived.doubled }, children);
}
export default Component44126;
