import React from 'react';
const LABEL_42800 = 'component_42800';
export function Component42800({ value = 42800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42800, 'data-value': derived.doubled }, children);
}
export default Component42800;
