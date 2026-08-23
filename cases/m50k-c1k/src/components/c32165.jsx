import React from 'react';
const LABEL_32165 = 'component_32165';
export function Component32165({ value = 32165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32165, 'data-value': derived.doubled }, children);
}
export default Component32165;
