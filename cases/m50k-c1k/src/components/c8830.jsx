import React from 'react';
const LABEL_8830 = 'component_8830';
export function Component8830({ value = 8830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8830, 'data-value': derived.doubled }, children);
}
export default Component8830;
