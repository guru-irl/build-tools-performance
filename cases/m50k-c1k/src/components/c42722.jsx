import React from 'react';
const LABEL_42722 = 'component_42722';
export function Component42722({ value = 42722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42722, 'data-value': derived.doubled }, children);
}
export default Component42722;
