import React from 'react';
const LABEL_42853 = 'component_42853';
export function Component42853({ value = 42853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42853, 'data-value': derived.doubled }, children);
}
export default Component42853;
