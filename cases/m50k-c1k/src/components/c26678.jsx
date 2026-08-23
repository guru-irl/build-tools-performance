import React from 'react';
const LABEL_26678 = 'component_26678';
export function Component26678({ value = 26678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26678, 'data-value': derived.doubled }, children);
}
export default Component26678;
