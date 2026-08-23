import React from 'react';
const LABEL_27709 = 'component_27709';
export function Component27709({ value = 27709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27709, 'data-value': derived.doubled }, children);
}
export default Component27709;
