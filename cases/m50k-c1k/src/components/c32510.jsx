import React from 'react';
const LABEL_32510 = 'component_32510';
export function Component32510({ value = 32510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32510, 'data-value': derived.doubled }, children);
}
export default Component32510;
