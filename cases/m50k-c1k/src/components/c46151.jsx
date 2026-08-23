import React from 'react';
const LABEL_46151 = 'component_46151';
export function Component46151({ value = 46151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46151, 'data-value': derived.doubled }, children);
}
export default Component46151;
