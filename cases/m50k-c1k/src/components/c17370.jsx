import React from 'react';
const LABEL_17370 = 'component_17370';
export function Component17370({ value = 17370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17370, 'data-value': derived.doubled }, children);
}
export default Component17370;
