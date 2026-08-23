import React from 'react';
const LABEL_33449 = 'component_33449';
export function Component33449({ value = 33449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33449, 'data-value': derived.doubled }, children);
}
export default Component33449;
