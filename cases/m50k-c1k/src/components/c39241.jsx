import React from 'react';
const LABEL_39241 = 'component_39241';
export function Component39241({ value = 39241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39241, 'data-value': derived.doubled }, children);
}
export default Component39241;
