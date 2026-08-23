import React from 'react';
const LABEL_32391 = 'component_32391';
export function Component32391({ value = 32391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32391, 'data-value': derived.doubled }, children);
}
export default Component32391;
