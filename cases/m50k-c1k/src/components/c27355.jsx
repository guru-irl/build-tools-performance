import React from 'react';
const LABEL_27355 = 'component_27355';
export function Component27355({ value = 27355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27355, 'data-value': derived.doubled }, children);
}
export default Component27355;
