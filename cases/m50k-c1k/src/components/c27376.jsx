import React from 'react';
const LABEL_27376 = 'component_27376';
export function Component27376({ value = 27376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27376, 'data-value': derived.doubled }, children);
}
export default Component27376;
