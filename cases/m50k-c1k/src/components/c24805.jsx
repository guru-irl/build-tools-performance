import React from 'react';
const LABEL_24805 = 'component_24805';
export function Component24805({ value = 24805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24805, 'data-value': derived.doubled }, children);
}
export default Component24805;
