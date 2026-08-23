import React from 'react';
const LABEL_27899 = 'component_27899';
export function Component27899({ value = 27899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27899, 'data-value': derived.doubled }, children);
}
export default Component27899;
