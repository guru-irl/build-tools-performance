import React from 'react';
const LABEL_10962 = 'component_10962';
export function Component10962({ value = 10962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10962, 'data-value': derived.doubled }, children);
}
export default Component10962;
