import React from 'react';
const LABEL_17512 = 'component_17512';
export function Component17512({ value = 17512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17512, 'data-value': derived.doubled }, children);
}
export default Component17512;
