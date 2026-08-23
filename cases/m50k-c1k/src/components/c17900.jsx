import React from 'react';
const LABEL_17900 = 'component_17900';
export function Component17900({ value = 17900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17900, 'data-value': derived.doubled }, children);
}
export default Component17900;
