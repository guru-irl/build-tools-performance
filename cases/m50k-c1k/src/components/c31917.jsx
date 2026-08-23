import React from 'react';
const LABEL_31917 = 'component_31917';
export function Component31917({ value = 31917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31917, 'data-value': derived.doubled }, children);
}
export default Component31917;
