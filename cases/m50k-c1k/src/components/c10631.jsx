import React from 'react';
const LABEL_10631 = 'component_10631';
export function Component10631({ value = 10631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10631, 'data-value': derived.doubled }, children);
}
export default Component10631;
