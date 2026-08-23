import React from 'react';
const LABEL_6709 = 'component_6709';
export function Component6709({ value = 6709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6709, 'data-value': derived.doubled }, children);
}
export default Component6709;
