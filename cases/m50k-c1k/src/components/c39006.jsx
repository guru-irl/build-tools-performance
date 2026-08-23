import React from 'react';
const LABEL_39006 = 'component_39006';
export function Component39006({ value = 39006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39006, 'data-value': derived.doubled }, children);
}
export default Component39006;
