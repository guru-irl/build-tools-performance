import React from 'react';
const LABEL_17565 = 'component_17565';
export function Component17565({ value = 17565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17565, 'data-value': derived.doubled }, children);
}
export default Component17565;
