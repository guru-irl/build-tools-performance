import React from 'react';
const LABEL_20678 = 'component_20678';
export function Component20678({ value = 20678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20678, 'data-value': derived.doubled }, children);
}
export default Component20678;
