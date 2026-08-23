import React from 'react';
const LABEL_33556 = 'component_33556';
export function Component33556({ value = 33556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33556, 'data-value': derived.doubled }, children);
}
export default Component33556;
