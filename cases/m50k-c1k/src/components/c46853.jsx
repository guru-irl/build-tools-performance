import React from 'react';
const LABEL_46853 = 'component_46853';
export function Component46853({ value = 46853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46853, 'data-value': derived.doubled }, children);
}
export default Component46853;
