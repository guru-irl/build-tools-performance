import React from 'react';
const LABEL_46438 = 'component_46438';
export function Component46438({ value = 46438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46438, 'data-value': derived.doubled }, children);
}
export default Component46438;
