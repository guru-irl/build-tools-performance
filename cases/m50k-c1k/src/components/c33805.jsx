import React from 'react';
const LABEL_33805 = 'component_33805';
export function Component33805({ value = 33805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33805, 'data-value': derived.doubled }, children);
}
export default Component33805;
