import React from 'react';
const LABEL_22805 = 'component_22805';
export function Component22805({ value = 22805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22805, 'data-value': derived.doubled }, children);
}
export default Component22805;
