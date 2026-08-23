import React from 'react';
const LABEL_17993 = 'component_17993';
export function Component17993({ value = 17993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17993, 'data-value': derived.doubled }, children);
}
export default Component17993;
