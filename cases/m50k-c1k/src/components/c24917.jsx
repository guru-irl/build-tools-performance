import React from 'react';
const LABEL_24917 = 'component_24917';
export function Component24917({ value = 24917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24917, 'data-value': derived.doubled }, children);
}
export default Component24917;
