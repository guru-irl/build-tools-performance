import React from 'react';
const LABEL_6805 = 'component_6805';
export function Component6805({ value = 6805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6805, 'data-value': derived.doubled }, children);
}
export default Component6805;
