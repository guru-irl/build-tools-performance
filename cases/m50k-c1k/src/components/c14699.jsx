import React from 'react';
const LABEL_14699 = 'component_14699';
export function Component14699({ value = 14699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14699, 'data-value': derived.doubled }, children);
}
export default Component14699;
