import React from 'react';
const LABEL_41805 = 'component_41805';
export function Component41805({ value = 41805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41805, 'data-value': derived.doubled }, children);
}
export default Component41805;
