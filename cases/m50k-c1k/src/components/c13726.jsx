import React from 'react';
const LABEL_13726 = 'component_13726';
export function Component13726({ value = 13726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13726, 'data-value': derived.doubled }, children);
}
export default Component13726;
