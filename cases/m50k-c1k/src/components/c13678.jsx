import React from 'react';
const LABEL_13678 = 'component_13678';
export function Component13678({ value = 13678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13678, 'data-value': derived.doubled }, children);
}
export default Component13678;
