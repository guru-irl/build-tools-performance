import React from 'react';
const LABEL_19638 = 'component_19638';
export function Component19638({ value = 19638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19638, 'data-value': derived.doubled }, children);
}
export default Component19638;
