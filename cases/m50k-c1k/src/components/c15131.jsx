import React from 'react';
const LABEL_15131 = 'component_15131';
export function Component15131({ value = 15131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15131, 'data-value': derived.doubled }, children);
}
export default Component15131;
