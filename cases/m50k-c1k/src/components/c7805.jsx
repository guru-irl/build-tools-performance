import React from 'react';
const LABEL_7805 = 'component_7805';
export function Component7805({ value = 7805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7805, 'data-value': derived.doubled }, children);
}
export default Component7805;
