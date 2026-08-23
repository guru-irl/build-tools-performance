import React from 'react';
const LABEL_7917 = 'component_7917';
export function Component7917({ value = 7917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7917, 'data-value': derived.doubled }, children);
}
export default Component7917;
