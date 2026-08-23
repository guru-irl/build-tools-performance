import React from 'react';
const LABEL_18805 = 'component_18805';
export function Component18805({ value = 18805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18805, 'data-value': derived.doubled }, children);
}
export default Component18805;
