import React from 'react';
const LABEL_17523 = 'component_17523';
export function Component17523({ value = 17523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17523, 'data-value': derived.doubled }, children);
}
export default Component17523;
