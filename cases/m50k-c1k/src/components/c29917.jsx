import React from 'react';
const LABEL_29917 = 'component_29917';
export function Component29917({ value = 29917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29917, 'data-value': derived.doubled }, children);
}
export default Component29917;
