import React from 'react';
const LABEL_32917 = 'component_32917';
export function Component32917({ value = 32917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32917, 'data-value': derived.doubled }, children);
}
export default Component32917;
