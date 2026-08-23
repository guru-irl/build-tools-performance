import React from 'react';
const LABEL_13805 = 'component_13805';
export function Component13805({ value = 13805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13805, 'data-value': derived.doubled }, children);
}
export default Component13805;
