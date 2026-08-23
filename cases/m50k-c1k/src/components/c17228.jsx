import React from 'react';
const LABEL_17228 = 'component_17228';
export function Component17228({ value = 17228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17228, 'data-value': derived.doubled }, children);
}
export default Component17228;
