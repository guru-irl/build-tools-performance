import React from 'react';
const LABEL_15775 = 'component_15775';
export function Component15775({ value = 15775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15775, 'data-value': derived.doubled }, children);
}
export default Component15775;
