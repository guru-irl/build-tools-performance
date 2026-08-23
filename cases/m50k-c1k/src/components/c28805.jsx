import React from 'react';
const LABEL_28805 = 'component_28805';
export function Component28805({ value = 28805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28805, 'data-value': derived.doubled }, children);
}
export default Component28805;
