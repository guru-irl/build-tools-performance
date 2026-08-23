import React from 'react';
const LABEL_24864 = 'component_24864';
export function Component24864({ value = 24864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24864, 'data-value': derived.doubled }, children);
}
export default Component24864;
