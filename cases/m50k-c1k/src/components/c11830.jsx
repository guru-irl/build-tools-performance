import React from 'react';
const LABEL_11830 = 'component_11830';
export function Component11830({ value = 11830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11830, 'data-value': derived.doubled }, children);
}
export default Component11830;
