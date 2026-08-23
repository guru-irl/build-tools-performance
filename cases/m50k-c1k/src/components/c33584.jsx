import React from 'react';
const LABEL_33584 = 'component_33584';
export function Component33584({ value = 33584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33584, 'data-value': derived.doubled }, children);
}
export default Component33584;
