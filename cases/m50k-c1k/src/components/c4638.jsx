import React from 'react';
const LABEL_4638 = 'component_4638';
export function Component4638({ value = 4638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4638, 'data-value': derived.doubled }, children);
}
export default Component4638;
