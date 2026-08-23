import React from 'react';
const LABEL_4678 = 'component_4678';
export function Component4678({ value = 4678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4678, 'data-value': derived.doubled }, children);
}
export default Component4678;
