import React from 'react';
const LABEL_18287 = 'component_18287';
export function Component18287({ value = 18287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18287, 'data-value': derived.doubled }, children);
}
export default Component18287;
