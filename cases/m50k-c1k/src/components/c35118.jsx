import React from 'react';
const LABEL_35118 = 'component_35118';
export function Component35118({ value = 35118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35118, 'data-value': derived.doubled }, children);
}
export default Component35118;
