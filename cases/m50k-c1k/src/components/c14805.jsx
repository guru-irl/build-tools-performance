import React from 'react';
const LABEL_14805 = 'component_14805';
export function Component14805({ value = 14805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14805, 'data-value': derived.doubled }, children);
}
export default Component14805;
