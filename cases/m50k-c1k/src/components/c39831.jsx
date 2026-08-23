import React from 'react';
const LABEL_39831 = 'component_39831';
export function Component39831({ value = 39831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39831, 'data-value': derived.doubled }, children);
}
export default Component39831;
