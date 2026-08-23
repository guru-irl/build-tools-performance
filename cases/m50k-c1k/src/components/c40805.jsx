import React from 'react';
const LABEL_40805 = 'component_40805';
export function Component40805({ value = 40805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40805, 'data-value': derived.doubled }, children);
}
export default Component40805;
