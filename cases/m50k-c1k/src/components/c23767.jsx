import React from 'react';
const LABEL_23767 = 'component_23767';
export function Component23767({ value = 23767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23767, 'data-value': derived.doubled }, children);
}
export default Component23767;
