import React from 'react';
const LABEL_28631 = 'component_28631';
export function Component28631({ value = 28631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28631, 'data-value': derived.doubled }, children);
}
export default Component28631;
