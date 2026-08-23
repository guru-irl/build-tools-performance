import React from 'react';
const LABEL_44709 = 'component_44709';
export function Component44709({ value = 44709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44709, 'data-value': derived.doubled }, children);
}
export default Component44709;
