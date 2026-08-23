import React from 'react';
const LABEL_11967 = 'component_11967';
export function Component11967({ value = 11967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11967, 'data-value': derived.doubled }, children);
}
export default Component11967;
