import React from 'react';
const LABEL_37805 = 'component_37805';
export function Component37805({ value = 37805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37805, 'data-value': derived.doubled }, children);
}
export default Component37805;
