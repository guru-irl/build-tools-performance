import React from 'react';
const LABEL_29726 = 'component_29726';
export function Component29726({ value = 29726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29726, 'data-value': derived.doubled }, children);
}
export default Component29726;
