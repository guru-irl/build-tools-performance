import React from 'react';
const LABEL_17689 = 'component_17689';
export function Component17689({ value = 17689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17689, 'data-value': derived.doubled }, children);
}
export default Component17689;
