import React from 'react';
const LABEL_8503 = 'component_8503';
export function Component8503({ value = 8503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8503, 'data-value': derived.doubled }, children);
}
export default Component8503;
