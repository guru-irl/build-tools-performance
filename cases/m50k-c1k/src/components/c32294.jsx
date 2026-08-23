import React from 'react';
const LABEL_32294 = 'component_32294';
export function Component32294({ value = 32294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32294, 'data-value': derived.doubled }, children);
}
export default Component32294;
