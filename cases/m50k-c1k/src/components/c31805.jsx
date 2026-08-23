import React from 'react';
const LABEL_31805 = 'component_31805';
export function Component31805({ value = 31805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31805, 'data-value': derived.doubled }, children);
}
export default Component31805;
