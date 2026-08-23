import React from 'react';
const LABEL_35787 = 'component_35787';
export function Component35787({ value = 35787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35787, 'data-value': derived.doubled }, children);
}
export default Component35787;
