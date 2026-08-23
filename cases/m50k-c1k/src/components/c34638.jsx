import React from 'react';
const LABEL_34638 = 'component_34638';
export function Component34638({ value = 34638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34638, 'data-value': derived.doubled }, children);
}
export default Component34638;
