import React from 'react';
const LABEL_17740 = 'component_17740';
export function Component17740({ value = 17740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17740, 'data-value': derived.doubled }, children);
}
export default Component17740;
