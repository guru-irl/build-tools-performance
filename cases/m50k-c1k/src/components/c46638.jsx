import React from 'react';
const LABEL_46638 = 'component_46638';
export function Component46638({ value = 46638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46638, 'data-value': derived.doubled }, children);
}
export default Component46638;
