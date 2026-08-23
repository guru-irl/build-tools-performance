import React from 'react';
const LABEL_34805 = 'component_34805';
export function Component34805({ value = 34805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34805, 'data-value': derived.doubled }, children);
}
export default Component34805;
