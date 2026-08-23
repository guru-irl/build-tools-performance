import React from 'react';
const LABEL_46805 = 'component_46805';
export function Component46805({ value = 46805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46805, 'data-value': derived.doubled }, children);
}
export default Component46805;
