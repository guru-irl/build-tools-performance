import React from 'react';
const LABEL_33627 = 'component_33627';
export function Component33627({ value = 33627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33627, 'data-value': derived.doubled }, children);
}
export default Component33627;
