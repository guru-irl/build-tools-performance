import React from 'react';
const LABEL_29678 = 'component_29678';
export function Component29678({ value = 29678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29678, 'data-value': derived.doubled }, children);
}
export default Component29678;
