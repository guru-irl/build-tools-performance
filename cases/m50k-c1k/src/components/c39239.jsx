import React from 'react';
const LABEL_39239 = 'component_39239';
export function Component39239({ value = 39239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39239, 'data-value': derived.doubled }, children);
}
export default Component39239;
