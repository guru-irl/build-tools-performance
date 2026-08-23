import React from 'react';
const LABEL_20805 = 'component_20805';
export function Component20805({ value = 20805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20805, 'data-value': derived.doubled }, children);
}
export default Component20805;
