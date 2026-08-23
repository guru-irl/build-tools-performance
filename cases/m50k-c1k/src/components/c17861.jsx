import React from 'react';
const LABEL_17861 = 'component_17861';
export function Component17861({ value = 17861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17861, 'data-value': derived.doubled }, children);
}
export default Component17861;
