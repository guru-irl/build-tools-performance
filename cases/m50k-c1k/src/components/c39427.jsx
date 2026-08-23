import React from 'react';
const LABEL_39427 = 'component_39427';
export function Component39427({ value = 39427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39427, 'data-value': derived.doubled }, children);
}
export default Component39427;
