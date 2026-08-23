import React from 'react';
const LABEL_39263 = 'component_39263';
export function Component39263({ value = 39263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39263, 'data-value': derived.doubled }, children);
}
export default Component39263;
