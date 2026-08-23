import React from 'react';
const LABEL_44805 = 'component_44805';
export function Component44805({ value = 44805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44805, 'data-value': derived.doubled }, children);
}
export default Component44805;
