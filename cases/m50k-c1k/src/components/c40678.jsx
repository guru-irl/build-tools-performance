import React from 'react';
const LABEL_40678 = 'component_40678';
export function Component40678({ value = 40678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40678, 'data-value': derived.doubled }, children);
}
export default Component40678;
