import React from 'react';
const LABEL_39654 = 'component_39654';
export function Component39654({ value = 39654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39654, 'data-value': derived.doubled }, children);
}
export default Component39654;
