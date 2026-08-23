import React from 'react';
const LABEL_3605 = 'component_3605';
export function Component3605({ value = 3605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3605, 'data-value': derived.doubled }, children);
}
export default Component3605;
