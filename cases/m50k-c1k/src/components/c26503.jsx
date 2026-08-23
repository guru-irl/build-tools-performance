import React from 'react';
const LABEL_26503 = 'component_26503';
export function Component26503({ value = 26503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26503, 'data-value': derived.doubled }, children);
}
export default Component26503;
