import React from 'react';
const LABEL_36051 = 'component_36051';
export function Component36051({ value = 36051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36051, 'data-value': derived.doubled }, children);
}
export default Component36051;
