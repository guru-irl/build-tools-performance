import React from 'react';
const LABEL_11631 = 'component_11631';
export function Component11631({ value = 11631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11631, 'data-value': derived.doubled }, children);
}
export default Component11631;
