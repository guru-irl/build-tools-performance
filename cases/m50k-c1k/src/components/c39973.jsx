import React from 'react';
const LABEL_39973 = 'component_39973';
export function Component39973({ value = 39973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39973, 'data-value': derived.doubled }, children);
}
export default Component39973;
