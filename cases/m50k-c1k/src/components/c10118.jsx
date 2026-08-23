import React from 'react';
const LABEL_10118 = 'component_10118';
export function Component10118({ value = 10118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10118, 'data-value': derived.doubled }, children);
}
export default Component10118;
