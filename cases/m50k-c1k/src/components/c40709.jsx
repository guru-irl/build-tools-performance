import React from 'react';
const LABEL_40709 = 'component_40709';
export function Component40709({ value = 40709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40709, 'data-value': derived.doubled }, children);
}
export default Component40709;
