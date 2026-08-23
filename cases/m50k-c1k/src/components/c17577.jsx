import React from 'react';
const LABEL_17577 = 'component_17577';
export function Component17577({ value = 17577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17577, 'data-value': derived.doubled }, children);
}
export default Component17577;
