import React from 'react';
const LABEL_28917 = 'component_28917';
export function Component28917({ value = 28917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28917, 'data-value': derived.doubled }, children);
}
export default Component28917;
