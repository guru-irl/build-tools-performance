import React from 'react';
const LABEL_33048 = 'component_33048';
export function Component33048({ value = 33048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33048, 'data-value': derived.doubled }, children);
}
export default Component33048;
