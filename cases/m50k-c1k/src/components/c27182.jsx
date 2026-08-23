import React from 'react';
const LABEL_27182 = 'component_27182';
export function Component27182({ value = 27182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27182, 'data-value': derived.doubled }, children);
}
export default Component27182;
