import React from 'react';
const LABEL_43805 = 'component_43805';
export function Component43805({ value = 43805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43805, 'data-value': derived.doubled }, children);
}
export default Component43805;
