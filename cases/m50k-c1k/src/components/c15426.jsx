import React from 'react';
const LABEL_15426 = 'component_15426';
export function Component15426({ value = 15426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15426, 'data-value': derived.doubled }, children);
}
export default Component15426;
