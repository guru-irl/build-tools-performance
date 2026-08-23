import React from 'react';
const LABEL_42631 = 'component_42631';
export function Component42631({ value = 42631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42631, 'data-value': derived.doubled }, children);
}
export default Component42631;
