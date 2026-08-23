import React from 'react';
const LABEL_18957 = 'component_18957';
export function Component18957({ value = 18957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18957, 'data-value': derived.doubled }, children);
}
export default Component18957;
