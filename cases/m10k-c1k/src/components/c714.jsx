import React from 'react';
const LABEL_714 = 'component_714';
export function Component714({ value = 714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_714, 'data-value': derived.doubled }, children);
}
export default Component714;
