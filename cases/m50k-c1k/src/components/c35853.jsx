import React from 'react';
const LABEL_35853 = 'component_35853';
export function Component35853({ value = 35853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35853, 'data-value': derived.doubled }, children);
}
export default Component35853;
